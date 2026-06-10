import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { supabase } from '../lib/supabase.js'
import { useAuth } from '../contexts/AuthContext.jsx'

const PAGE_SIZE = 10

const CATEGORIES = [
  { id: 'free',   label: '자유게시판' },
  { id: 'notice', label: '공지사항' },
  { id: 'qna',    label: 'Q&A' },
]

export default function Board() {
  const { category = 'free' } = useParams()
  const [posts, setPosts] = useState([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [searchInput, setSearchInput] = useState('')
  const { user, isAdmin } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    setPage(1)
    setSearch('')
    setSearchInput('')
  }, [category])

  useEffect(() => {
    fetchPosts()
  }, [page, search, category])

  async function fetchPosts() {
    setLoading(true)
    let query = supabase
      .from('board_posts')
      .select('id, title, author_name, views, created_at, is_pinned', { count: 'exact' })
      .eq('category', category)
      .order('is_pinned', { ascending: false })
      .order('created_at', { ascending: false })
      .range((page - 1) * PAGE_SIZE, page * PAGE_SIZE - 1)

    if (search) query = query.ilike('title', `%${search}%`)

    const { data, count, error } = await query
    if (!error) {
      setPosts(data ?? [])
      setTotal(count ?? 0)
    }
    setLoading(false)
  }

  function handleSearch(e) {
    e.preventDefault()
    setPage(1)
    setSearch(searchInput)
  }

  const totalPages = Math.ceil(total / PAGE_SIZE)
  const canWrite = user && (category !== 'notice' || isAdmin)
  const currentCategory = CATEGORIES.find(c => c.id === category)

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">

        {/* 카테고리 탭 */}
        <div className="flex gap-1 mb-6 border-b border-gray-200 dark:border-gray-800">
          {CATEGORIES.map(c => (
            <button
              key={c.id}
              onClick={() => navigate(`/board/${c.id}`)}
              className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-colors -mb-px ${
                category === c.id
                  ? 'border-blush-500 text-blush-600 dark:text-blush-400'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* 헤더 */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">총 {total}개의 게시글</p>
          {canWrite && (
            <button
              onClick={() => navigate(`/board/write?category=${category}`)}
              className="px-4 py-2 rounded-lg bg-blush-500 hover:bg-blush-600 text-white text-sm font-medium transition-colors"
            >
              글쓰기
            </button>
          )}
        </div>

        {/* 검색 */}
        <form onSubmit={handleSearch} className="flex gap-2 mb-6">
          <input
            type="text"
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
            placeholder="제목 검색..."
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blush-400 text-sm"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 text-sm font-medium transition-colors"
          >
            검색
          </button>
        </form>

        {/* 목록 */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden shadow-sm">
          <div className="grid grid-cols-[1fr_auto_auto_auto] gap-4 px-6 py-3 bg-gray-50 dark:bg-gray-800/50 text-xs font-medium text-gray-500 dark:text-gray-400 border-b border-gray-100 dark:border-gray-800">
            <span>제목</span>
            <span className="w-20 text-center">작성자</span>
            <span className="w-16 text-center">조회</span>
            <span className="w-24 text-center">날짜</span>
          </div>

          {loading ? (
            <div className="py-16 text-center text-gray-400 text-sm">불러오는 중...</div>
          ) : posts.length === 0 ? (
            <div className="py-16 text-center text-gray-400 text-sm">
              {search ? '검색 결과가 없습니다.' : '게시글이 없습니다.'}
            </div>
          ) : (
            posts.map((post, i) => (
              <Link
                key={post.id}
                to={`/board/${category}/${post.id}`}
                className={`grid grid-cols-[1fr_auto_auto_auto] gap-4 px-6 py-4 items-center hover:bg-blush-50 dark:hover:bg-blush-900/10 transition-colors ${
                  i !== 0 ? 'border-t border-gray-100 dark:border-gray-800' : ''
                } ${post.is_pinned ? 'bg-blush-50/40 dark:bg-blush-900/5' : ''}`}
              >
                <span className="text-sm text-gray-900 dark:text-gray-100 truncate font-medium flex items-center gap-2">
                  {post.is_pinned && (
                    <span className="text-xs bg-blush-100 dark:bg-blush-900/30 text-blush-600 dark:text-blush-400 px-1.5 py-0.5 rounded font-medium flex-shrink-0">공지</span>
                  )}
                  {post.title}
                </span>
                <span className="w-20 text-center text-xs text-gray-500 dark:text-gray-400 truncate">{post.author_name}</span>
                <span className="w-16 text-center text-xs text-gray-500 dark:text-gray-400">{post.views}</span>
                <span className="w-24 text-center text-xs text-gray-400">{post.created_at?.slice(0, 10)}</span>
              </Link>
            ))
          )}
        </div>

        {/* 페이지네이션 */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-1 mt-6">
            <button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-3 py-1.5 rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-40 transition-colors"
            >
              이전
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  p === page ? 'bg-blush-500 text-white' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-3 py-1.5 rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-40 transition-colors"
            >
              다음
            </button>
          </div>
        )}

        {!user && (
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
            글을 작성하려면{' '}
            <Link to="/login" className="text-blush-500 hover:underline font-medium">로그인</Link>
            {' '}하세요.
          </p>
        )}
      </div>
    </div>
  )
}
