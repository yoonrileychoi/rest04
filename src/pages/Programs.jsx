import { Link } from 'react-router-dom'
import { programs, subjects } from '../data/site.js'

const steps = [
  { step: '01', title: '회원가입', desc: '간단한 정보 입력으로 무료로 가입하세요.' },
  { step: '02', title: '취향 분석', desc: '스타일·체형·예산을 입력하면 AI가 취향을 분석합니다.' },
  { step: '03', title: 'AI 추천', desc: 'AI가 맞춤 상품을 큐레이션하고 최저가를 비교합니다.' },
  { step: '04', title: '쇼핑 시작', desc: '추천 상품을 확인하고 제휴 쇼핑몰에서 바로 구매하세요.' },
]

export default function Programs() {
  return (
    <>
      {/* ── 페이지 헤더 ── */}
      <div className="page-hero">
        <div className="container-wrap">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link to="/" className="hover:text-blush-500 transition-colors">홈</Link>
            <span>›</span>
            <span className="text-blush-600 dark:text-blush-300 font-medium">서비스 프로그램</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
            서비스 프로그램
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            AI 기술과 트렌드 큐레이션이 함께하는 스마트 쇼핑 프로그램입니다.
          </p>
        </div>
      </div>

      <div className="container-wrap section-y space-y-20">
        {/* ── 프로그램 카드 ── */}
        <section>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-8 text-center">
            핵심 프로그램
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((p) => (
              <div key={p.id} className="card overflow-hidden">
                {/* 컬러 상단 바 */}
                <div className={`h-1.5 bg-gradient-to-r ${p.colorClass}`} />
                <div className="p-8">
                  <div className="flex items-start gap-5 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${p.colorClass} flex items-center justify-center text-3xl flex-shrink-0`}>
                      {p.icon}
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                        {p.category}
                      </span>
                      <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mt-0.5">
                        {p.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {p.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-2">
                    {p.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-sage-500 flex-shrink-0">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                        </svg>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 시작하는 방법 ── */}
        <section>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-8 text-center">
            이렇게 시작하세요
          </h2>
          <div className="relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-blush-300 to-azure-300 dark:from-blush-700 dark:to-azure-700 mx-[12.5%]" />
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {steps.map((s, i) => (
                <div key={s.step} className="relative flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${
                    i % 2 === 0
                      ? 'from-blush-400 to-coral-500'
                      : 'from-azure-400 to-plum-500'
                  } flex items-center justify-center text-white font-extrabold text-lg mb-4 shadow-lg relative z-10`}>
                    {s.step}
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 카테고리별 바로가기 ── */}
        <section className="bg-gray-50 dark:bg-gray-900/50 rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-2 text-center">
            카테고리별 프로그램
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-center mb-8">
            원하는 카테고리를 선택해 맞춤 쇼핑을 시작하세요.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {subjects.map((s) => (
              <div key={s.id} className="flex flex-col gap-2">
                <Link
                  to={`/videos/${s.id}`}
                  className="card p-4 text-center hover:shadow-md group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.colorFrom} ${s.colorTo} flex items-center justify-center text-xl mx-auto mb-2 group-hover:scale-110 transition-transform`}>
                    {s.icon}
                  </div>
                  <p className="font-bold text-sm text-gray-900 dark:text-white">{s.label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">영상</p>
                </Link>
                <Link
                  to={`/workbook/${s.id}`}
                  className="text-center py-2 rounded-xl text-xs font-semibold border border-blush-200 dark:border-blush-800 text-blush-600 dark:text-blush-300 hover:bg-blush-50 dark:hover:bg-blush-900/20 transition-colors"
                >
                  AI 추천
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="text-center">
          <div className="inline-block">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
              지금 바로 시작하세요
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              처음 30일은 무료로 모든 프로그램을 체험할 수 있습니다.
            </p>
            <Link to="/workbook/fashion" className="btn-primary text-base px-10 py-4">
              무료 체험 시작하기
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
