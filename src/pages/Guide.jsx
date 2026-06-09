import { useState } from 'react'
import { Link } from 'react-router-dom'
import { faqs } from '../data/site.js'

const plans = [
  {
    name: '기본',
    price: '9,900',
    period: '월',
    colorClass: 'from-azure-400 to-plum-500',
    features: ['동영상 강의 1과목', 'AI 문제집 월 3회', '학습 리포트', '모바일 앱'],
    highlight: false,
  },
  {
    name: '프리미엄',
    price: '19,900',
    period: '월',
    colorClass: 'from-blush-500 to-coral-500',
    features: ['동영상 강의 전과목', 'AI 문제집 무제한', 'AI 튜터링', '학습 리포트', '모바일 앱', 'PDF 다운로드'],
    highlight: true,
    badge: '인기',
  },
  {
    name: '연간권',
    price: '149,000',
    period: '년',
    colorClass: 'from-sage-400 to-azure-500',
    features: ['프리미엄 전기능', '월 결제 대비 37% 절약', '우선 지원'],
    highlight: false,
  },
]

/* ── FAQ 아코디언 ── */
function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-gray-100 dark:border-gray-800 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="font-medium text-gray-800 dark:text-gray-200 text-sm md:text-base">{q}</span>
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`w-5 h-5 flex-shrink-0 text-blush-500 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-48 pb-5' : 'max-h-0'}`}>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{a}</p>
      </div>
    </div>
  )
}

export default function Guide() {
  return (
    <>
      {/* ── 페이지 헤더 ── */}
      <div className="page-hero">
        <div className="container-wrap">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link to="/" className="hover:text-blush-500 transition-colors">홈</Link>
            <span>›</span>
            <span className="text-blush-600 dark:text-blush-300 font-medium">이용 안내</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
            이용 안내
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            EduAI 서비스 이용 방법과 요금제를 안내합니다.
          </p>
        </div>
      </div>

      <div className="container-wrap section-y space-y-20">
        {/* ── 이용 단계 ── */}
        <section>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-12">
            서비스 이용 방법
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', icon: '📝', title: '회원가입 & 진단', desc: '간단한 회원가입 후 AI 학습 수준 진단을 받으세요. 3분 내로 완료됩니다.' },
              { step: '2', icon: '📚', title: '콘텐츠 선택', desc: '원하는 과목의 동영상 강의와 AI 문제집을 선택하세요. 수준별로 추천해 드립니다.' },
              { step: '3', icon: '🚀', title: '학습 시작', desc: 'AI 튜터와 함께 맞춤 학습을 시작하세요. 언제 어디서나 학습 가능합니다.' },
            ].map((item) => (
              <div key={item.step} className="card p-8 text-center relative">
                <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-gradient-to-br from-blush-100 to-azure-100 dark:from-blush-900/30 dark:to-azure-900/30 flex items-center justify-center text-sm font-bold text-blush-600 dark:text-blush-300">
                  {item.step}
                </div>
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 요금제 ── */}
        <section>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-4">
            요금제
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-400 mb-12">
            30일 무료 체험 후 결제가 시작됩니다. 언제든지 해지 가능합니다.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`card overflow-hidden ${plan.highlight ? 'ring-2 ring-blush-400 dark:ring-blush-500' : ''}`}
              >
                <div className={`h-1.5 bg-gradient-to-r ${plan.colorClass}`} />
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-extrabold text-gray-900 dark:text-white text-lg">{plan.name}</h3>
                    {plan.badge && (
                      <span className="text-xs font-bold bg-gradient-to-r from-blush-500 to-coral-500 text-white px-3 py-1 rounded-full">
                        {plan.badge}
                      </span>
                    )}
                  </div>
                  <div className="mb-6">
                    <span className="text-3xl font-extrabold text-gray-900 dark:text-white">
                      ₩{plan.price}
                    </span>
                    <span className="text-gray-400 text-sm ml-1">/ {plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-sage-500 flex-shrink-0">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                        </svg>
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                      plan.highlight
                        ? 'bg-gradient-to-r from-blush-500 to-coral-500 text-white hover:from-blush-600 hover:to-coral-600 shadow-sm hover:shadow-md'
                        : 'border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blush-400 hover:text-blush-600 dark:hover:text-blush-300'
                    }`}
                  >
                    {plan.highlight ? '무료로 시작하기' : '선택하기'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-10">
            자주 묻는 질문
          </h2>
          <div className="max-w-2xl mx-auto card p-6 md:p-8">
            {faqs.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </section>

        {/* ── 문의 ── */}
        <section className="text-center bg-gray-50 dark:bg-gray-900/50 rounded-3xl p-10 md:p-16">
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-3">
            추가 문의가 있으신가요?
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            이메일이나 카카오톡 채널을 통해 빠르게 답변드립니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:contact@eduai.kr"
              className="btn-primary"
            >
              이메일 문의
            </a>
            <button className="btn-secondary">
              카카오톡 채널
            </button>
          </div>
        </section>
      </div>
    </>
  )
}
