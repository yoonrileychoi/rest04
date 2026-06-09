import { useParams, Link, useNavigate, Navigate } from 'react-router-dom'
import { siteInfo, history } from '../data/site.js'

const tabs = [
  { id: 'company', label: '회사 소개' },
  { id: 'vision',  label: '비전' },
  { id: 'history', label: '연혁' },
]

const values = [
  { icon: '🎯', title: '정확성', desc: 'AI가 분석하는 모든 추천은 실제 구매 데이터와 검수를 거쳐 정확성을 보장합니다.' },
  { icon: '🌱', title: '성장', desc: '고객 한 명 한 명의 스타일 성장을 최우선으로 생각하는 서비스 철학을 고집합니다.' },
  { icon: '🤝', title: '신뢰', desc: '고객·파트너 브랜드와의 신뢰를 기반으로 지속 가능한 쇼핑 서비스를 만듭니다.' },
  { icon: '🚀', title: '혁신', desc: '최신 AI 기술을 쇼핑에 적용해 더 나은 고객 경험을 끊임없이 연구합니다.' },
]

const visionItems = [
  { title: '맞춤형 쇼핑의 대중화', desc: 'AI 기술로 모든 고객이 전담 스타일리스트 수준의 맞춤 쇼핑을 경험하게 합니다.', icon: '🛍️' },
  { title: 'AI 쇼핑 리더십', desc: '국내 최고의 AI 퍼스널 쇼퍼 플랫폼으로 커머스 분야를 선도합니다.', icon: '🏆' },
  { title: '글로벌 확장', desc: '한국을 시작으로 아시아 패션·뷰티 시장으로 서비스를 확대합니다.', icon: '🌏' },
]

export default function About() {
  const { tab } = useParams()
  const navigate = useNavigate()

  if (!tabs.find((t) => t.id === tab)) {
    return <Navigate to="/about/company" replace />
  }

  return (
    <>
      {/* ── 페이지 헤더 ── */}
      <div className="page-hero">
        <div className="container-wrap">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link to="/" className="hover:text-blush-500 transition-colors">홈</Link>
            <span>›</span>
            <span className="text-blush-600 dark:text-blush-300 font-medium">소개</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
            소개
          </h1>
          <p className="text-gray-500 dark:text-gray-400">StyleAI를 소개합니다.</p>
        </div>
      </div>

      {/* ── 탭 바 ── */}
      <div className="sticky top-16 md:top-20 z-30 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
        <div className="container-wrap">
          <div className="flex gap-1 py-3">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => navigate(`/about/${t.id}`)}
                className={`tab-btn ${t.id === tab ? 'active' : ''}`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container-wrap section-y">
        {/* ── 회사 소개 ── */}
        {tab === 'company' && (
          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-semibold text-blush-500 mb-3 block">Company</span>
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">
                  AI 퍼스널 쇼핑의<br />새로운 기준을 만듭니다
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  StyleAI는 인공지능 기술을 활용한 개인 맞춤형 쇼핑 서비스를 제공하는 커머스테크 기업입니다.
                  고객 한 명 한 명의 취향과 체형을 분석해 최적화된 상품을 추천합니다.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  패션부터 뷰티까지 다양한 카테고리를 대상으로, AI 퍼스널 쇼퍼 추천과 트렌드 스타일 영상을
                  결합한 통합 쇼핑 플랫폼을 운영합니다. 기술과 스타일의 경계에서 더 나은 쇼핑을 만듭니다.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    { label: '설립연도', value: '2024년' },
                    { label: '서비스 시작', value: '2026년' },
                    { label: '대상', value: '패션·뷰티 전체' },
                    { label: '위치', value: '서울 강남구' },
                  ].map((item) => (
                    <div key={item.label} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-4">
                      <p className="text-xs text-gray-400 mb-1">{item.label}</p>
                      <p className="font-bold text-gray-900 dark:text-white">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-blush-200 to-azure-200 dark:from-blush-900/40 dark:to-azure-900/40 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">🛍️</div>
                    <p className="text-2xl font-extrabold text-gray-800 dark:text-white">StyleAI</p>
                    <p className="text-gray-500 dark:text-gray-400">{siteInfo.tagline}</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-gradient-to-br from-coral-400 to-blush-500 flex items-center justify-center text-4xl shadow-xl">
                  🤖
                </div>
              </div>
            </div>

            {/* 핵심 가치 */}
            <div>
              <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white text-center mb-8">
                핵심 가치
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((v) => (
                  <div key={v.title} className="card p-6 text-center">
                    <div className="text-4xl mb-3">{v.icon}</div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">{v.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── 비전 ── */}
        {tab === 'vision' && (
          <div className="space-y-16">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-sm font-semibold text-azure-500 mb-3 block">Vision</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
                모든 고객에게 최고의<br />쇼핑 경험을
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                StyleAI의 비전은 AI 기술을 통해 쇼핑의 불편함을 해소하고,
                모든 고객이 자신의 스타일을 자유롭게 표현할 수 있는 환경을 만드는 것입니다.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {visionItems.map((v) => (
                <div key={v.title} className="card p-8 text-center">
                  <div className="text-5xl mb-4">{v.icon}</div>
                  <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-3">{v.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-blush-500 to-azure-500 p-10 md:p-14 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-white blur-3xl" />
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold mb-4 relative z-10">
                "AI가 완성하는 나만의 쇼핑"
              </h3>
              <p className="text-white/80 max-w-lg mx-auto relative z-10">
                단순한 상품 나열을 넘어, 고객 스스로 자신의 스타일을 발견하는 것이 StyleAI의 궁극적인 목표입니다.
              </p>
            </div>
          </div>
        )}

        {/* ── 연혁 ── */}
        {tab === 'history' && (
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-plum-500 mb-3 block">History</span>
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">연혁</h2>
            </div>
            <div className="relative">
              <div className="absolute left-[22px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blush-300 via-azure-300 to-plum-300 dark:from-blush-700 dark:via-azure-700 dark:to-plum-700 -translate-x-1/2" />
              <div className="space-y-10">
                {history.map((item, yi) => (
                  <div key={item.year} className={`flex gap-6 md:gap-0 ${yi % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* 연도 */}
                    <div className={`md:w-1/2 flex ${yi % 2 === 0 ? 'md:justify-end md:pr-10' : 'md:justify-start md:pl-10'} items-center`}>
                      <span className="hidden md:inline text-2xl font-extrabold bg-gradient-to-r from-blush-500 to-azure-500 bg-clip-text text-transparent">
                        {item.year}
                      </span>
                    </div>
                    {/* 도트 */}
                    <div className="relative flex-shrink-0 flex items-start pt-1">
                      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blush-400 to-azure-400 flex items-center justify-center text-white font-bold text-xs shadow-lg z-10 md:absolute md:left-1/2 md:-translate-x-1/2">
                        {item.year.slice(2)}
                      </div>
                    </div>
                    {/* 이벤트 */}
                    <div className={`md:w-1/2 ${yi % 2 === 0 ? 'md:pl-10' : 'md:pr-10'} flex-1`}>
                      <span className="md:hidden text-xl font-extrabold text-blush-500 block mb-2">{item.year}</span>
                      <div className="card p-5">
                        <ul className="space-y-2">
                          {item.events.map((e) => (
                            <li key={e} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-blush-400 flex-shrink-0 mt-1.5" />
                              {e}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
