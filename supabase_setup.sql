-- =============================================
-- 1. 사용자 프로필 테이블 (role 관리)
-- =============================================
create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  nickname text,
  role text not null default 'user' check (role in ('user', 'admin')),
  created_at timestamptz default now()
);

alter table profiles enable row level security;

create policy "profiles_select" on profiles for select using (true);

-- 본인 프로필만 수정 가능하되, role은 변경 불가
create policy "profiles_update" on profiles for update
  using (auth.uid() = id)
  with check (
    role = (select role from profiles where id = auth.uid())
  );

-- 회원가입 시 자동으로 profiles 행 생성
create or replace function handle_new_user()
returns trigger as $$
begin
  insert into profiles (id, nickname)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'nickname', split_part(new.email, '@', 1))
  );
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function handle_new_user();


-- =============================================
-- 2. 관리자 여부 확인 함수
-- =============================================
create or replace function is_admin()
returns boolean as $$
  select exists (
    select 1 from profiles
    where id = auth.uid() and role = 'admin'
  );
$$ language sql security definer;


-- =============================================
-- 3. 게시글 테이블
-- =============================================
create table if not exists board_posts (
  id uuid primary key default gen_random_uuid(),
  category text not null check (category in ('free', 'notice', 'qna')),
  title text not null,
  content text not null,
  user_id uuid references auth.users(id) on delete cascade not null,
  author_name text not null,
  views integer default 0,
  is_pinned boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table board_posts enable row level security;

-- 누구나 읽기 가능
create policy "board_posts_select" on board_posts for select using (true);

-- 자유/QnA: 로그인 사용자 작성, 공지: 관리자만 작성
create policy "board_posts_insert" on board_posts for insert
  with check (
    auth.uid() = user_id and (
      category in ('free', 'qna')
      or (category = 'notice' and is_admin())
    )
  );

-- 본인 글 수정 또는 관리자
create policy "board_posts_update" on board_posts for update
  using (auth.uid() = user_id or is_admin());

-- 본인 글 삭제 또는 관리자
create policy "board_posts_delete" on board_posts for delete
  using (auth.uid() = user_id or is_admin());


-- =============================================
-- 4. 댓글 테이블
-- =============================================
create table if not exists board_comments (
  id uuid primary key default gen_random_uuid(),
  post_id uuid references board_posts(id) on delete cascade not null,
  user_id uuid references auth.users(id) on delete cascade not null,
  author_name text not null,
  content text not null,
  created_at timestamptz default now()
);

alter table board_comments enable row level security;

-- 누구나 읽기 가능
create policy "board_comments_select" on board_comments for select using (true);

-- 자유/공지 댓글: 로그인 사용자, QnA 답변: 관리자만
create policy "board_comments_insert" on board_comments for insert
  with check (
    auth.uid() = user_id and (
      is_admin()
      or exists (
        select 1 from board_posts p
        where p.id = post_id and p.category != 'qna'
      )
    )
  );

-- 본인 댓글 삭제 또는 관리자
create policy "board_comments_delete" on board_comments for delete
  using (auth.uid() = user_id or is_admin());


-- =============================================
-- 5. 첨부파일 테이블
-- =============================================
create table if not exists board_attachments (
  id uuid primary key default gen_random_uuid(),
  post_id uuid references board_posts(id) on delete cascade not null,
  file_name text not null,
  file_path text not null,
  file_size integer,
  mime_type text,
  created_at timestamptz default now()
);

alter table board_attachments enable row level security;

create policy "board_attachments_select" on board_attachments for select using (true);
create policy "board_attachments_insert" on board_attachments for insert
  with check (auth.uid() is not null);
create policy "board_attachments_delete" on board_attachments for delete
  using (
    is_admin() or
    exists (
      select 1 from board_posts p
      where p.id = post_id and p.user_id = auth.uid()
    )
  );


-- =============================================
-- 6. 조회수 증가 함수
-- =============================================
create or replace function increment_views(post_id uuid)
returns void as $$
  update board_posts set views = views + 1 where id = post_id;
$$ language sql security definer;
