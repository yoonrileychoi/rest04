export const siteInfo = {
  name: 'StyleAI',
  tagline: 'AI가 완성하는 나만의 쇼핑',
  description: 'AI 기술로 개인 맞춤형 쇼핑을 제안하고, 트렌드 스타일 영상으로 나만의 스타일을 완성합니다.',
  email: 'contact@styleai.kr',
  phone: '02-1234-5678',
  address: '서울특별시 강남구 테헤란로 123, 스타일타워 10F',
  copyright: '© 2026 StyleAI Corp. All rights reserved.',
}

export const nav = [
  { label: '홈', path: '/' },
  {
    label: 'AI 추천',
    path: '/workbook/fashion',
    children: [
      { label: '패션', path: '/workbook/fashion' },
      { label: '뷰티', path: '/workbook/beauty' },
    ],
  },
  {
    label: '스타일 영상',
    path: '/videos/fashion',
    children: [
      { label: '패션', path: '/videos/fashion' },
      { label: '뷰티', path: '/videos/beauty' },
    ],
  },
  { label: '서비스 프로그램', path: '/programs' },
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
  { id: 'fashion', label: '패션', icon: '👗', colorFrom: 'from-blush-400', colorTo: 'to-blush-600', description: '취향·체형에 맞는 패션 스타일 추천' },
  { id: 'beauty',  label: '뷰티', icon: '💄', colorFrom: 'from-coral-400', colorTo: 'to-coral-600', description: '피부타입·취향별 뷰티 제품 추천' },
]

/* ── YouTube 스타일 영상 데이터 ────────────────────────────────────────────
   youtubeId : 실제 YouTube 영상 ID로 교체해 주세요.
   비공개(private) 영상은 embed가 불가하므로 반드시 "링크 공개(Unlisted)" 설정을 이용하세요.
──────────────────────────────────────────────────────────────────────────── */
export const videos = {
  fashion: [
    { id: 'f1', title: '2026 S/S 패션 트렌드 총정리', youtubeId: 'YOUTUBE_ID_HERE', level: '전체', description: '2026년 봄여름 패션 핵심 키워드와 스타일링 팁을 소개합니다.', date: '2026-06-09', views: '-' },
    { id: 'f2', title: '체형별 슬림 코디 공식', youtubeId: 'YOUTUBE_ID_HERE', level: '전체', description: '체형에 따른 슬림 코디법과 추천 아이템을 알려드립니다.', date: '2026-06-05', views: '-' },
    { id: 'f3', title: '출근룩 5가지 완성 — 직장인 코디', youtubeId: 'YOUTUBE_ID_HERE', level: '직장인', description: '단정하면서도 세련된 직장인 출근룩 5가지를 소개합니다.', date: '2026-05-28', views: '-' },
    { id: 'f4', title: '미니멀 캐주얼 코디 — 아이템 10개로 30벌 입기', youtubeId: 'YOUTUBE_ID_HERE', level: '전체', description: '적은 아이템으로 다양한 코디를 완성하는 미니멀 패션 전략입니다.', date: '2026-05-21', views: '-' },
    { id: 'f5', title: '봄 신상 하울 — 이번 시즌 꼭 사야 할 아이템', youtubeId: 'YOUTUBE_ID_HERE', level: '전체', description: '2026 S/S 시즌 필수 신상 아이템 하울 영상입니다.', date: '2026-05-14', views: '-' },
    { id: 'f6', title: '색깔 배합 코디 — 컬러 믹스매치 완전 정복', youtubeId: 'YOUTUBE_ID_HERE', level: '전체', description: '색상 조합의 원리와 컬러 코디 실전 방법을 알려드립니다.', date: '2026-05-07', views: '-' },
    { id: 'f7', title: '겨울 레이어링 마스터 클래스', youtubeId: 'YOUTUBE_ID_HERE', level: '전체', description: '레이어링의 기술로 세련되고 따뜻한 겨울 코디를 완성하세요.', date: '2026-04-30', views: '-' },
    { id: 'f8', title: '빈티지 스타일 가이드 — 레트로 룩 완성하기', youtubeId: 'YOUTUBE_ID_HERE', level: '전체', description: '감각적인 빈티지·레트로 스타일 연출 방법을 공유합니다.', date: '2026-04-23', views: '-' },
  ],
  beauty: [
    { id: 'b1', title: '봄 메이크업 트렌드 — 2026 S/S 뷰티 핵심', youtubeId: 'YOUTUBE_ID_HERE', level: '전체', description: '2026 봄여름 시즌 메이크업 트렌드와 제품을 소개합니다.', date: '2026-06-09', views: '-' },
    { id: 'b2', title: '데일리 스킨케어 루틴 5분 완성', youtubeId: 'YOUTUBE_ID_HERE', level: '입문', description: '바쁜 아침에도 5분이면 완성되는 데일리 스킨케어 루틴입니다.', date: '2026-06-02', views: '-' },
    { id: 'b3', title: '지성·건성 피부별 추천 파운데이션 TOP 5', youtubeId: 'YOUTUBE_ID_HERE', level: '전체', description: '피부타입별 최적의 파운데이션 추천과 사용법을 알려드립니다.', date: '2026-05-26', views: '-' },
    { id: 'b4', title: '입술 하나로 분위기 바꾸기 — 립 메이크업 총정리', youtubeId: 'YOUTUBE_ID_HERE', level: '전체', description: '다양한 립 메이크업 스타일과 추천 제품을 정리했습니다.', date: '2026-05-19', views: '-' },
    { id: 'b5', title: '천연 성분 스킨케어 — 민감성 피부를 위한 추천', youtubeId: 'YOUTUBE_ID_HERE', level: '민감성', description: '민감한 피부에도 안심하고 사용할 수 있는 제품을 소개합니다.', date: '2026-05-12', views: '-' },
    { id: 'b6', title: '향수 입문 가이드 — 나에게 맞는 향 찾기', youtubeId: 'YOUTUBE_ID_HERE', level: '입문', description: '향의 계열과 특성을 이해하고 나에게 맞는 향수를 선택하는 법을 소개합니다.', date: '2026-05-05', views: '-' },
    { id: 'b7', title: '눈썹 그리기 완전 정복 — 얼굴형별 눈썹 메이크업', youtubeId: 'YOUTUBE_ID_HERE', level: '전체', description: '얼굴형에 맞는 눈썹 스타일과 그리는 방법을 알려드립니다.', date: '2026-04-28', views: '-' },
    { id: 'b8', title: '클렌징 방법 총정리 — 피부 망치지 않는 올바른 세안법', youtubeId: 'YOUTUBE_ID_HERE', level: '전체', description: '올바른 클렌징 방법으로 깨끗하고 건강한 피부를 관리하세요.', date: '2026-04-21', views: '-' },
  ],
}

export const workbooks = {
  fashion: [
    { id: 'wf1', title: '2026 S/S 트렌드 코디 북', level: '전체', pages: 48, difficulty: '기본', tags: ['봄여름', '트렌드', '코디'], description: 'AI가 분석한 2026 S/S 시즌 핵심 트렌드와 추천 코디를 정리했습니다.' },
    { id: 'wf2', title: '체형별 베스트 아이템 가이드', level: '전체', pages: 36, difficulty: '맞춤', tags: ['체형', '슬림룩', '아이템'], description: '체형 데이터를 기반으로 AI가 선별한 슬림핏·베스트 아이템 모음입니다.' },
    { id: 'wf3', title: '직장인 캡슐 옷장 큐레이션', level: '직장인', pages: 30, difficulty: '실용', tags: ['출근룩', '캐주얼', '캡슐옷장'], description: '10가지 아이템으로 한 달을 입는 직장인 캡슐 옷장 AI 큐레이션입니다.' },
  ],
  beauty: [
    { id: 'wb1', title: '피부타입별 스킨케어 루틴북', level: '전체', pages: 40, difficulty: '기본', tags: ['스킨케어', '피부타입', '루틴'], description: '지성·건성·복합성·민감성 피부별 최적의 스킨케어 루틴을 제공합니다.' },
    { id: 'wb2', title: '시즌 메이크업 트렌드 가이드', level: '전체', pages: 32, difficulty: '트렌드', tags: ['메이크업', '시즌', '트렌드'], description: 'AI가 큐레이션한 시즌별 메이크업 트렌드와 추천 제품 가이드입니다.' },
    { id: 'wb3', title: '클린뷰티 추천 가이드', level: '민감성', pages: 28, difficulty: '클린', tags: ['클린뷰티', '천연성분', '저자극'], description: '성분 분석 AI가 선별한 안전하고 효과적인 클린뷰티 제품 모음입니다.' },
  ],
}

export const programs = [
  {
    id: 'prog1',
    title: 'AI 스타일 추천',
    category: 'AI 쇼핑',
    icon: '🤖',
    colorClass: 'from-coral-400 to-blush-500',
    description: 'AI가 취향·체형·예산을 분석하여 나에게 꼭 맞는 상품을 자동으로 추천합니다.',
    features: ['취향 기반 맞춤 추천', '체형·사이즈 분석', '예산 범위 설정', '찜 목록 관리'],
  },
  {
    id: 'prog2',
    title: '트렌드 스타일 영상',
    category: '스타일 영상',
    icon: '🎬',
    colorClass: 'from-azure-400 to-plum-500',
    description: '시즌별 트렌드와 스타일링 팁을 담은 영상으로 나만의 스타일을 완성하세요.',
    features: ['시즌 트렌드 큐레이션', '스타일링 팁 영상', '반복 시청 가능', '북마크 저장'],
  },
  {
    id: 'prog3',
    title: '실시간 AI 스타일리스트',
    category: 'AI 스타일리스트',
    icon: '✨',
    colorClass: 'from-blush-400 to-coral-500',
    description: 'AI 스타일리스트가 질문에 즉시 답변하고 코디·상품 조합을 제안합니다.',
    features: ['24시간 코디 추천', '상품 조합 제안', '가격 비교 분석', '구매 리포트'],
  },
  {
    id: 'prog4',
    title: '라이프스타일 쇼핑',
    category: '라이프스타일',
    icon: '🛍️',
    colorClass: 'from-sage-400 to-azure-500',
    description: '패션부터 뷰티까지, 일상을 더 풍요롭게 만드는 라이프스타일 쇼핑을 경험하세요.',
    features: ['카테고리 통합 추천', '정기 배송 상품', '기획전·특가 알림', '리뷰 기반 추천'],
  },
]

export const stats = [
  { label: '가입 회원', value: '120만+', desc: '전국 쇼핑족이 함께합니다' },
  { label: '추천 상품', value: '200만+', desc: '카테고리별 검증된 상품' },
  { label: '평균 절약률', value: '32%', desc: 'AI 가격 비교 기준' },
  { label: '만족도', value: '97%', desc: '회원 평균 만족도' },
]

export const history = [
  { year: '2026', events: ['StyleAI 서비스 정식 오픈', 'AI 퍼스널 쇼퍼 기술 특허 출원', '누적 회원 120만 명 돌파'] },
  { year: '2025', events: ['베타 서비스 시작', '중소벤처기업부 AI 스타트업 선정', '시드 투자 유치'] },
  { year: '2024', events: ['StyleAI 법인 설립', 'AI 스타일 추천 알고리즘 개발', '초기 팀 구성'] },
]

export const faqs = [
  { q: '서비스 이용료는 얼마인가요?', a: '월정액 구독 요금제와 단품 이용 모두 가능합니다. 이용 안내 페이지에서 자세한 요금을 확인하세요.' },
  { q: '어떤 카테고리 쇼핑을 지원하나요?', a: '패션, 뷰티 카테고리를 지원하며, 지속적으로 카테고리를 확장하고 있습니다.' },
  { q: 'AI 추천은 어떻게 작동하나요?', a: '회원의 취향, 체형, 구매 이력, 예산을 분석하여 AI가 개인화된 상품을 자동으로 추천합니다.' },
  { q: '추천 상품은 어디서 구매할 수 있나요?', a: '추천 페이지에서 제휴 쇼핑몰로 바로 연결되어 편리하게 구매하실 수 있습니다.' },
  { q: '모바일에서도 이용 가능한가요?', a: '스마트폰·태블릿·노트북 등 모든 기기에서 최적화된 화면으로 이용하실 수 있습니다.' },
]
