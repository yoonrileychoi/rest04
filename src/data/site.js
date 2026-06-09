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
    { id: 'f1', title: '"AI가 맞춤옷 골라준다"…패션업계 새바람', youtubeId: 'KgNvEvTibEo', level: '전체', description: 'AI가 취향과 체형을 분석해 맞춤 패션을 추천하는 패션업계의 새로운 AI 서비스를 소개합니다.', date: '2024-09-05', views: '-' },
    { id: 'f2', title: '2025 패션 트렌드 및 추천 아이템 3가지', youtubeId: '6DW1lrSxgjM', level: '전체', description: '2025년 패션 트렌드 키워드와 꼭 갖춰야 할 추천 아이템 3가지를 소개합니다.', date: '2025-01-24', views: '-' },
    { id: 'f3', title: '2025 하반기 패션 트렌드 & 나만의 스타일', youtubeId: '5BjJd2tUbeU', level: '전체', description: '2025년 하반기 패션 트렌드와 개인 스타일 방향을 제시합니다.', date: '2025-07-01', views: '-' },
    { id: 'f4', title: '2025년 AI 구매대행 프로그램 실전 A-Z 시연', youtubeId: 'btXCGfcXRUg', level: '전체', description: 'AI를 활용한 구매대행 프로그램의 실전 사용법을 A부터 Z까지 시연합니다.', date: '2025-01-01', views: '-' },
    { id: 'f5', title: '쇼핑도 AI 시대 — 블랙프라이데이의 조용한 주인공', youtubeId: '84C-pDjt0Cg', level: '전체', description: 'OpenAI·Google·Amazon의 AI 쇼핑 어시스턴트가 블랙프라이데이 소비 트렌드를 바꾸고 있습니다.', date: '2025-12-01', views: '-' },
    { id: 'f6', title: '[MWC25] 퍼스널 AI 에이전트의 놀라운 발전', youtubeId: 'CbpD29ikTik', level: '전체', description: 'MWC 2025에서 공개된 퍼스널 AI 에이전트 기술과 맞춤형 쇼핑 혁신을 소개합니다.', date: '2025-03-09', views: '-' },
    { id: 'f7', title: '패션 AI 솔루션 — NC AI VARCO Art Fashion', youtubeId: 'R1J9P-rbqhI', level: '전체', description: '패션 디자이너와 마케터를 위한 AI 패션 콘텐츠 자동 생성 서비스를 소개합니다.', date: '2025-04-16', views: '-' },
    { id: 'f8', title: '포엣코어가 진짜 뜬 이유 — 비싸지 않아도 멋내는 시대', youtubeId: 'vrezqYa9WQg', level: '전체', description: '소비 패턴 변화가 만들어낸 포엣코어 트렌드와 가성비 패션의 새로운 시대를 분석합니다.', date: '2025-01-01', views: '-' },
  ],
  beauty: [
    { id: 'b1', title: '[CES 2026] Skinsight — AI 기반 피부 분석 솔루션', youtubeId: 'b-PhgLFCHPw', level: '전체', description: 'Amorepacific과 MIT가 공동 개발한 AI 피부 분석 기술을 CES 2026에서 소개합니다.', date: '2026-01-01', views: '-' },
    { id: 'b2', title: '2026년 가성비 피부관리 추천 TOP10', youtubeId: 'cLbj67bZ7Eo', level: '전체', description: '2026년 가성비 최고의 피부 관리 제품 TOP10과 사용법을 소개합니다.', date: '2026-01-01', views: '-' },
    { id: 'b3', title: '홈메이드 스킨케어 레시피 — 내추럴 뷰티 꿀팁', youtubeId: 'DZ3j4QnQAHA', level: '입문', description: '집에서 만드는 천연 스킨케어 레시피와 메이크업 꿀팁을 공유합니다.', date: '2024-01-01', views: '-' },
    { id: 'b4', title: '2025 오송 화장품·뷰티산업 엑스포 공식 영상', youtubeId: '0hOFZlrL-mI', level: '전체', description: '2025년 K-뷰티 트렌드와 최신 뷰티 제품을 한눈에 볼 수 있는 엑스포 공식 영상입니다.', date: '2025-01-01', views: '-' },
    { id: 'b5', title: '바이오미믹 AI 크림 — 민감성 피부 장벽 강화', youtubeId: '97irpVpyF7s', level: '민감성', description: 'AI 기술을 접목한 피부 장벽 강화 성분의 스킨케어 제품을 소개합니다.', date: '2024-06-01', views: '-' },
    { id: 'b6', title: '퍼스널 쇼퍼 — 고객 맞춤형 쇼핑 도우미의 모든 것', youtubeId: 'sgQBBhn88X4', level: '전체', description: '퍼스널 쇼퍼의 역할과 AI 시대 맞춤형 쇼핑 도우미 서비스를 심층 소개합니다.', date: '2023-12-27', views: '-' },
    { id: 'b7', title: 'GRWM — 자연스러운 데일리 메이크업 루틴', youtubeId: 'VWOKvqkCeak', level: '전체', description: '매일 따라하기 쉬운 자연스러운 데일리 메이크업 루틴을 소개합니다.', date: '2026-03-01', views: '-' },
    { id: 'b8', title: '쇼핑을 바꾸는 AI — 스마트 쇼핑의 새로운 시대', youtubeId: 'yOCyOQsCEJc', level: '전체', description: 'AI 퍼스널 쇼퍼가 쇼핑 습관을 어떻게 바꾸는지 실제 사례로 보여주는 영상입니다.', date: '2026-06-01', views: '-' },
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
