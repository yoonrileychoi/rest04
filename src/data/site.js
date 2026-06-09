export const siteInfo = {
  name: 'EduAI',
  tagline: 'AI로 완성하는 나의 학습 여정',
  description: 'AI 기술로 개인 맞춤형 문제집을 생성하고, 전문 강사의 동영상 강의로 개념을 완성합니다.',
  email: 'contact@eduai.kr',
  phone: '02-1234-5678',
  address: '서울특별시 강남구 테헤란로 123, 에듀타워 10F',
  copyright: '© 2026 EduAI Corp. All rights reserved.',
}

export const nav = [
  { label: '홈', path: '/' },
  {
    label: 'AI 문제집',
    path: '/workbook/english',
    children: [
      { label: '영어', path: '/workbook/english' },
      { label: '코딩', path: '/workbook/coding' },
    ],
  },
  {
    label: '동영상 강의',
    path: '/videos/english',
    children: [
      { label: '영어', path: '/videos/english' },
      { label: '코딩', path: '/videos/coding' },
    ],
  },
  { label: '교육 프로그램', path: '/programs' },
  {
    label: '소개',
    path: '/about/company',
    children: [
      { label: '회사 소개', path: '/about/company' },
      { label: '비전', path: '/about/vision' },
      { label: '연혁', path: '/about/history' },
    ],
  },
  { label: '이용 안내', path: '/guide' },
]

export const subjects = [
  { id: 'english', label: '영어', icon: '🌏', colorFrom: 'from-sage-400', colorTo: 'to-sage-600', description: '말하기·듣기·읽기·쓰기 통합 영어 학습' },
  { id: 'coding',  label: '코딩', icon: '💻', colorFrom: 'from-blush-400', colorTo: 'to-blush-600', description: '프로그래밍 기초부터 AI 프로젝트까지' },
]

/* ── YouTube 동영상 데이터 ─────────────────────────────────────────────────
   youtubeId : 실제 YouTube 영상 ID로 교체해 주세요.
   비공개(private) 영상은 embed가 불가하므로 반드시 "링크 공개(Unlisted)" 설정을 이용하세요.
────────────────────────────────────────────────────────────────────────── */
export const videos = {
  math: [
    { id: 'm1', title: '초등 수학 — 분수와 소수 완전 정복', youtubeId: 'YOUTUBE_ID_HERE', level: '초4-6', description: '분수와 소수의 개념부터 사칙연산까지 한 번에 정리합니다.', date: '2026-05-10', views: '1.2만' },
    { id: 'm2', title: '중1 방정식 기초 완성', youtubeId: 'YOUTUBE_ID_HERE', level: '중1', description: '방정식의 기본 개념과 풀이법을 쉽게 설명합니다.', date: '2026-05-15', views: '8.5천' },
    { id: 'm3', title: '중2 함수와 그래프', youtubeId: 'YOUTUBE_ID_HERE', level: '중2', description: '함수의 개념과 좌표평면 그래프 완전 이해.', date: '2026-05-20', views: '6.3천' },
    { id: 'm4', title: '고1 수학 — 집합과 명제', youtubeId: 'YOUTUBE_ID_HERE', level: '고1', description: '집합 연산과 명제 증명을 체계적으로 정리합니다.', date: '2026-05-25', views: '4.7천' },
    { id: 'm5', title: '고2 수학 — 수열 마스터', youtubeId: 'YOUTUBE_ID_HERE', level: '고2', description: '등차수열, 등비수열, 시그마 기호를 완전 정복합니다.', date: '2026-05-28', views: '3.9천' },
    { id: 'm6', title: '초등 도형의 세계', youtubeId: 'YOUTUBE_ID_HERE', level: '초3-5', description: '평면도형과 입체도형을 이해하는 기초 강의입니다.', date: '2026-06-01', views: '9.1천' },
    { id: 'm7', title: '중3 통계와 확률 기초', youtubeId: 'YOUTUBE_ID_HERE', level: '중3', description: '통계 자료 해석과 확률 계산법을 학습합니다.', date: '2026-06-03', views: '5.2천' },
    { id: 'm8', title: '고2-3 미적분 입문', youtubeId: 'YOUTUBE_ID_HERE', level: '고2-3', description: '극한의 개념과 미분의 기본 원리를 소개합니다.', date: '2026-06-05', views: '7.8천' },
  ],
  english: [
    { id: 'e1', title: '영어 문제 AI 생성 활용법', youtubeId: 'OXjrmo59sOc', level: '전학년', description: 'AI를 활용해 영어 문제를 생성하는 방법을 소개합니다.', date: '2026-06-09', views: '-' },
    { id: 'e2', title: 'GPT 활용 — 영어 시험 문제 출제 & 대량 생성 자동화', youtubeId: 'bddTsZ20Klg', level: '교사·학생', description: 'GPT로 영어 시험 문제를 출제하고 대량 자동화하는 방법을 다룹니다.', date: '2024-06-01', views: '-' },
    { id: 'e3', title: 'AI 변형문제 프로그램 6개 만드는 방법', youtubeId: 'mOsDkPf9DBg', level: '교사·학생', description: 'GPT 코딩으로 영어 변형문제 제작 앱 6개를 만들고 공유합니다.', date: '2024-10-01', views: '-' },
    { id: 'e4', title: '영어 단어배열 문제 순식간에 만드는 방법', youtubeId: 'jJ_Au19_AoM', level: '전학년', description: '영어 단어배열 문제를 빠르게 제작하는 방법을 설명합니다.', date: '2024-01-01', views: '-' },
    { id: 'e5', title: 'ChatGPT 활용 영어 문제·답안 만들기', youtubeId: 'q5hi0JWpmL8', level: '전학년', description: 'ChatGPT를 이용한 영어 문제 및 답안 작성 방법을 소개합니다.', date: '2024-01-01', views: '-' },
    { id: 'e6', title: 'ChatGPT로 다양한 형태의 시험 문제 만들기', youtubeId: 'zqODvBm1Fcg', level: '전학년', description: '특정 글을 바탕으로 여러 유형의 시험 문제를 만드는 방법입니다.', date: '2022-12-01', views: '-' },
    { id: 'e7', title: '챗GPT로 모의고사·내신자료 빠르게 만들기', youtubeId: 'Ou30NEnqMz4', level: '고등', description: '챗GPT를 이용해 모의고사 문제와 내신 자료를 쉽고 빠르게 만듭니다.', date: '2024-01-01', views: '-' },
    { id: 'e8', title: 'AI 퀴즈 생성기로 30초 만에 맞춤형 학습지 완성', youtubeId: 'yCsAR8XCns0', level: '초등', description: '교과서 내용을 복사하면 AI가 자동으로 퀴즈를 만들어 줍니다.', date: '2025-04-01', views: '-' },
  ],
  science: [
    { id: 's1', title: '중2 물리 — 힘과 운동', youtubeId: 'YOUTUBE_ID_HERE', level: '중2', description: '뉴턴의 운동 법칙을 실생활 예시로 이해합니다.', date: '2026-05-11', views: '5.6천' },
    { id: 's2', title: '중학 화학 — 원소와 화합물', youtubeId: 'YOUTUBE_ID_HERE', level: '중1-2', description: '원소 주기율표와 화학 결합의 원리를 배웁니다.', date: '2026-05-16', views: '4.3천' },
    { id: 's3', title: '고등 생물 — 세포와 유전', youtubeId: 'YOUTUBE_ID_HERE', level: '고1-2', description: '세포 구조와 유전의 원리를 체계적으로 정리합니다.', date: '2026-05-21', views: '6.8천' },
    { id: 's4', title: '지구과학 — 기후와 환경', youtubeId: 'YOUTUBE_ID_HERE', level: '중3', description: '기후 변화와 환경 보호의 중요성을 이해합니다.', date: '2026-05-27', views: '3.7천' },
    { id: 's5', title: '고1 물리 — 전기와 자기', youtubeId: 'YOUTUBE_ID_HERE', level: '고1', description: '전기 회로와 자기장의 원리를 설명합니다.', date: '2026-06-01', views: '5.1천' },
    { id: 's6', title: '화학 — 산과 염기 반응', youtubeId: 'YOUTUBE_ID_HERE', level: '고1-2', description: '산염기 반응과 중화 적정을 실험으로 이해합니다.', date: '2026-06-04', views: '4.9천' },
  ],
  ai: [
    { id: 'a1', title: 'AI란 무엇인가? 인공지능 입문', youtubeId: 'YOUTUBE_ID_HERE', level: '중1-고3', description: 'AI의 기본 개념과 작동 원리를 쉽게 설명합니다.', date: '2026-05-09', views: '3.2만' },
    { id: 'a2', title: 'ChatGPT 활용 학습법', youtubeId: 'YOUTUBE_ID_HERE', level: '중3-고3', description: 'AI 도구를 활용한 효율적인 학습 방법을 소개합니다.', date: '2026-05-14', views: '2.8만' },
    { id: 'a3', title: 'AI 이미지 생성 도구 활용', youtubeId: 'YOUTUBE_ID_HERE', level: '중2-고3', description: '창작 활동에 AI 이미지 생성 도구를 활용합니다.', date: '2026-05-19', views: '1.9만' },
    { id: 'a4', title: '머신러닝 기초 이해하기', youtubeId: 'YOUTUBE_ID_HERE', level: '고2-3', description: '머신러닝의 원리와 실제 적용 사례를 탐구합니다.', date: '2026-05-24', views: '8.4천' },
    { id: 'a5', title: 'AI 윤리와 미래 사회', youtubeId: 'YOUTUBE_ID_HERE', level: '중1-고3', description: 'AI 시대의 윤리적 고민과 미래 직업 변화를 살펴봅니다.', date: '2026-05-29', views: '7.6천' },
    { id: 'a6', title: 'AI 활용 글쓰기와 창작', youtubeId: 'YOUTUBE_ID_HERE', level: '중2-고3', description: 'AI와 함께하는 창의적 글쓰기 기법을 배웁니다.', date: '2026-06-03', views: '1.1만' },
  ],
  coding: [
    { id: 'c1', title: '코딩 1도 모르지만 AI로 개발하고 싶은 분들 필수 시청', youtubeId: 'ollMbEOzofc', level: '입문', description: '바이브코딩 기초와 AI 보조 개발 방법을 처음부터 설명합니다.', date: '2025-04-01', views: '-' },
    { id: 'c2', title: 'AI 시대, 코딩을 배워야 할까?', youtubeId: 'E1bvBcpPKeQ', level: '전체', description: 'AI 시대에 코딩 학습의 필요성과 개발자의 미래를 논의합니다.', date: '2024-01-01', views: '-' },
    { id: 'c3', title: '말만 하면 AI가 코딩까지 해줍니다', youtubeId: 'CHxzLiRRdMg', level: '전체', description: 'AI 자동 코딩 시대, IT 개발자의 변화와 대응 방법을 소개합니다.', date: '2024-01-01', views: '-' },
    { id: 'c4', title: '이제는 누구나 코딩할 수 있는 이유 — ChatGPT·Claude·Cursor', youtubeId: 'yfshAt06Eg8', level: '입문', description: 'AI 도구를 활용해 비전문가도 코딩할 수 있는 방법을 알려줍니다.', date: '2024-01-01', views: '-' },
    { id: 'c5', title: 'AI로 바이브코딩 잘 하는 방법', youtubeId: '6fUjjQwIZrs', level: '입문', description: '인공지능을 활용한 바이브코딩 실전 노하우를 공유합니다.', date: '2025-01-01', views: '-' },
    { id: 'c6', title: 'ChatGPT + Claude 연합 AI 코딩 완성 — 비전문가도 OK', youtubeId: 'iKov8f3HDWI', level: '입문', description: 'ChatGPT와 Claude를 함께 활용하는 최강 AI 코딩 방법을 소개합니다.', date: '2025-01-01', views: '-' },
    { id: 'c7', title: 'AI 코딩, 누구나 할 수 있어요 — Grok·ChatGPT', youtubeId: 'Eci-iQ1TW-8', level: '입문', description: 'Grok, ChatGPT를 이용한 쉬운 AI 코딩 방법을 설명합니다.', date: '2025-01-01', views: '-' },
    { id: 'c8', title: '2025 AI 프로그래밍 공부 순서 완벽 로드맵', youtubeId: '0zL3EVl37Cs', level: '전체', description: 'AI 프로그래밍을 체계적으로 공부하는 순서와 방법을 안내합니다.', date: '2025-03-01', views: '-' },
  ],
}

export const workbooks = {
  math: [
    { id: 'wm1', title: '초등 수학 종합 문제집 Vol.1', level: '초4-6', pages: 120, difficulty: '기초', tags: ['분수', '소수', '도형'], description: 'AI가 생성한 개념 확인 문제와 응용 문제를 수록했습니다.' },
    { id: 'wm2', title: '중학 수학 기출 유형 정복', level: '중1-3', pages: 150, difficulty: '표준', tags: ['방정식', '함수', '통계'], description: '전국 기출 문제를 AI가 분석하여 핵심 유형을 선별했습니다.' },
    { id: 'wm3', title: '고등 수학 수능 대비 최종 정리', level: '고2-3', pages: 200, difficulty: '심화', tags: ['미적분', '확률', '통계'], description: '수능 출제 경향을 AI로 분석한 최고난도 예상 문제집입니다.' },
    { id: 'wm4', title: '초등 수학 개념 완성', level: '초1-3', pages: 90, difficulty: '기초', tags: ['덧셈', '뺄셈', '곱셈'], description: '초등 저학년을 위한 기초 수학 개념 완성 문제집입니다.' },
  ],
  english: [
    { id: 'we1', title: '영어 독해 유형 완전 정복', level: '중2-고1', pages: 140, difficulty: '표준', tags: ['독해', '어휘', '문법'], description: '독해 유형별 전략과 AI 생성 예시 지문을 수록했습니다.' },
    { id: 'we2', title: '수능 영어 단어 1200', level: '고1-3', pages: 100, difficulty: '심화', tags: ['어휘', '수능'], description: '수능 빈출 어휘를 AI가 선별하고 예문을 생성했습니다.' },
    { id: 'we3', title: '중학 영문법 총정리', level: '중1-3', pages: 160, difficulty: '표준', tags: ['문법', '시제', '구문'], description: '중학교 필수 문법을 AI 기반 연습 문제로 정리했습니다.' },
  ],
  science: [
    { id: 'ws1', title: '중학 과학 개념 정리', level: '중1-3', pages: 130, difficulty: '표준', tags: ['물리', '화학', '생물'], description: 'AI가 구성한 물리·화학·생물·지구과학 통합 문제집입니다.' },
    { id: 'ws2', title: '고등 통합과학 완성', level: '고1', pages: 170, difficulty: '심화', tags: ['통합과학', '수능'], description: '고등학교 통합과학 전 단원을 AI 예상 문제로 완성합니다.' },
  ],
  ai: [
    { id: 'wa1', title: 'AI 리터러시 기초 학습서', level: '중1-고3', pages: 80, difficulty: '기초', tags: ['AI개념', '윤리', '미래기술'], description: 'AI 기술의 기본 개념과 윤리적 활용을 학습합니다.' },
    { id: 'wa2', title: 'AI 도구 활용 실습서', level: '중3-고3', pages: 110, difficulty: '표준', tags: ['ChatGPT', '이미지AI', '실습'], description: 'ChatGPT, 이미지 생성 AI 등 실제 도구 활용 실습서입니다.' },
  ],
  coding: [
    { id: 'wc1', title: '파이썬 기초 완성', level: '중2-고1', pages: 140, difficulty: '표준', tags: ['파이썬', '알고리즘', '자료구조'], description: 'AI가 생성한 다양한 예제와 문제로 파이썬을 마스터합니다.' },
    { id: 'wc2', title: '스크래치 컴퓨팅 사고력', level: '초4-중2', pages: 100, difficulty: '기초', tags: ['스크래치', '블록코딩'], description: '블록 코딩을 통해 컴퓨팅 사고력을 키웁니다.' },
    { id: 'wc3', title: '데이터 분석 입문', level: '고1-3', pages: 120, difficulty: '심화', tags: ['파이썬', '데이터분석', 'pandas'], description: 'AI로 생성한 실제 데이터를 분석하며 파이썬을 학습합니다.' },
  ],
}

export const programs = [
  {
    id: 'prog1',
    title: 'AI 맞춤 문제집 생성',
    category: 'AI 학습',
    icon: '🤖',
    colorClass: 'from-coral-400 to-blush-500',
    description: 'AI가 학생의 수준과 약점을 분석하여 맞춤형 문제집을 자동으로 생성합니다.',
    features: ['수준별 맞춤 문제', '오답 패턴 분석', '주기적 복습 알림', 'PDF 다운로드'],
  },
  {
    id: 'prog2',
    title: '전문 동영상 강의',
    category: '동영상 강의',
    icon: '🎬',
    colorClass: 'from-azure-400 to-plum-500',
    description: '전문 강사의 체계적인 강의 영상으로 핵심 개념을 완벽하게 이해합니다.',
    features: ['주제별 단계 학습', '반복 시청 가능', '재생 속도 조절', '강의 북마크'],
  },
  {
    id: 'prog3',
    title: '실시간 AI 튜터링',
    category: 'AI 튜터',
    icon: '👨‍🏫',
    colorClass: 'from-blush-400 to-coral-500',
    description: 'AI 튜터가 학생의 질문에 즉시 답변하고 개인별 학습 경로를 안내합니다.',
    features: ['24시간 질문 응답', '오개념 즉시 교정', '학습 경로 제안', '진도 리포트'],
  },
  {
    id: 'prog4',
    title: 'AI·코딩 교육 프로그램',
    category: '미래 교육',
    icon: '💻',
    colorClass: 'from-sage-400 to-azure-500',
    description: 'AI·코딩 교육으로 창의적 문제 해결 능력을 키우고 미래를 준비합니다.',
    features: ['파이썬 기초', 'AI 프로젝트', '알고리즘 학습', '실전 코딩 과제'],
  },
]

export const stats = [
  { label: '등록 학생', value: '15,000+', desc: '전국 학생이 함께 합니다' },
  { label: '총 강의 수', value: '800+', desc: '다양한 과목과 수준' },
  { label: '문제 데이터', value: '50만+', desc: 'AI가 생성한 고품질 문제' },
  { label: '만족도', value: '98%', desc: '학생·학부모 평균 만족도' },
]

export const history = [
  { year: '2026', events: ['EduAI 서비스 정식 오픈', 'AI 문제집 생성 특허 출원', '누적 학생 수 15,000명 돌파'] },
  { year: '2025', events: ['베타 서비스 시작', '교육부 에듀테크 스타트업 선정', '시드 투자 유치'] },
  { year: '2024', events: ['EduAI 법인 설립', 'AI 맞춤 학습 알고리즘 개발', '초기 팀 구성'] },
]

export const faqs = [
  { q: '서비스 이용료는 얼마인가요?', a: '월정액 구독 요금제와 과목별 단품 구매 모두 가능합니다. 이용 안내 페이지에서 자세한 요금을 확인하세요.' },
  { q: '어떤 학년부터 이용 가능한가요?', a: '초등학교 1학년부터 고등학교 3학년까지 전 학년을 대상으로 서비스를 제공합니다.' },
  { q: 'AI 문제집은 어떻게 생성되나요?', a: '학생의 학습 이력과 오답 패턴을 분석하여 AI가 개인화된 문제를 자동으로 생성합니다.' },
  { q: '동영상은 언제든 시청 가능한가요?', a: '구독 기간 내 언제든지, 몇 번이든 반복 시청하실 수 있습니다.' },
  { q: '모바일에서도 이용 가능한가요?', a: '스마트폰·태블릿·노트북 등 모든 기기에서 최적화된 화면으로 이용하실 수 있습니다.' },
]
