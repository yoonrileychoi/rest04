import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { subjects, stats, programs } from '../data/site.js'

/* ── 히어로 슬라이드 데이터 ── */
const slides = [
  {
    tag: 'AI 맞춤 학습',
    title: 'AI가 만드는\n나만의 문제집',
    desc: '학습 데이터를 분석해 약점을 보완하는 개인 맞춤형 문제집을 즉시 생성합니다.',
    cta: { label: 'AI 문제집 보기', path: '/workbook/math' },
    ctaSub: { label: '더 알아보기', path: '/programs' },
  },
  {
    tag: '동영상 강의',
    title: '언제 어디서나\n전문 강의',
    desc: '전문 강사진이 제작한 핵심 개념 강의를 PC·모바일에서 자유롭게 시청하세요.',
    cta: { label: '강의 둘러보기', path: '/videos/math' },
    ctaSub: { label: '과목 선택', path: '/videos/ai' },
  },
]

/* ── 특징 카드 ── */
const features = [
  { icon: '🤖', title: 'AI 문제 생성', desc: '오답 패턴을 분석해 개인 맞춤 문제를 자동 생성합니다.', color: 'from-coral-100 to-blush-100 dark:from-coral-900/20 dark:to-blush-900/20' },
  { icon: '🎬', title: '동영상 강의', desc: '전문 강사의 핵심 강의를 언제든 반복 시청할 수 있습니다.', color: 'from-azure-100 to-plum-100 dark:from-azure-900/20 dark:to-plum-900/20' },
  { icon: '📊', title: '학습 분석', desc: '학습 진도와 성취도를 실시간으로 분석해 리포트를 제공합니다.', color: 'from-sage-100 to-azure-100 dark:from-sage-900/20 dark:to-azure-900/20' },
  { icon: '📱', title: '모바일 최적화', desc: '스마트폰·태블릿에서도 동일한 학습 경험을 누릴 수 있습니다.', color: 'from-plum-100 to-blush-100 dark:from-plum-900/20 dark:to-blush-900/20' },
]

/* ── 통계 카운터 컴포넌트 ── */
function StatCard({ label, value, desc, delay }) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(t)
  }, [delay])
  return (
    <div className={`text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <p className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blush-500 to-azure-500 bg-clip-text text-transparent">
        {value}
      </p>
      <p className="mt-2 font-semibold text-gray-800 dark:text-gray-100">{label}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{desc}</p>
    </div>
  )
}

export default function Home() {
  const [slide, setSlide] = useState(0)
  const [statsVisible, setStatsVisible] = useState(false)

  /* 슬라이드 자동 전환 */
  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % slides.length), 5000)
    return () => clearInterval(id)
  }, [])

  /* 통계 섹션 IntersectionObserver */
  useEffect(() => {
    const el = document.getElementById('stats-section')
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true) },
      { threshold: 0.3 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const cur = slides[slide]

  return (
    <>
      {/* ── 히어로 ──────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* 배경 그라데이션 */}
        <div className="absolute inset-0 bg-gradient-to-br from-blush-100 via-white to-azure-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-300" />

        {/* 장식 원 */}
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blush-200/40 dark:bg-blush-900/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-azure-200/40 dark:bg-azure-900/20 blur-3xl" />

        <div className="relative z-10 container-wrap w-full py-32 md:py-0 md:min-h-screen flex items-center">
          <div className="max-w-2xl">
            {/* 태그 */}
            <span className="inline-flex items-center gap-2 rounded-full bg-blush-100 dark:bg-blush-900/30 text-blush-700 dark:text-blush-300 px-4 py-1.5 text-sm font-semibold mb-6 animate-fadeIn">
              <span className="w-2 h-2 rounded-full bg-blush-500 animate-pulse" />
              {cur.tag}
            </span>

            {/* 타이틀 */}
            <h1
              key={slide}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-900 dark:text-white mb-6 animate-slideUp whitespace-pre-line"
            >
              {cur.title}
            </h1>

            {/* 설명 */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-lg animate-fadeIn">
              {cur.desc}
            </p>

            {/* CTA 버튼 */}
            <div className="flex flex-wrap gap-4">
              <Link to={cur.cta.path} className="btn-primary text-base px-8 py-4">
                {cur.cta.label}
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
                </svg>
              </Link>
              <Link to={cur.ctaSub.path} className="btn-secondary text-base px-8 py-4">
                {cur.ctaSub.label}
              </Link>
            </div>
          </div>
        </div>

        {/* 슬라이드 인디케이터 */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className={`rounded-full transition-all duration-300 ${
                i === slide
                  ? 'w-6 h-2.5 bg-blush-500'
                  : 'w-2.5 h-2.5 bg-gray-300 dark:bg-gray-600 hover:bg-blush-300'
              }`}
            />
          ))}
        </div>
      </section>

      {/* ── 통계 ────────────────────────────────────────────── */}
      <section id="stats-section" className="section-y bg-gradient-to-r from-blush-500 to-azure-500">
        <div className="container-wrap">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {statsVisible && stats.map((s, i) => (
              <StatCard key={s.label} {...s} delay={i * 150} />
            ))}
            {!statsVisible && stats.map((s) => (
              <div key={s.label} className="text-center opacity-0">
                <p className="text-5xl font-extrabold text-white">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 특징 ────────────────────────────────────────────── */}
      <section className="section-y">
        <div className="container-wrap">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              왜 <span className="bg-gradient-to-r from-blush-500 to-azure-500 bg-clip-text text-transparent">EduAI</span>인가요?
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              AI 기술과 전문 교육 콘텐츠를 결합하여 모든 학생에게 최적의 학습 환경을 제공합니다.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="card p-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center text-2xl mb-4`}>
                  {f.icon}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 과목 카테고리 ────────────────────────────────────── */}
      <section className="section-y bg-gray-50 dark:bg-gray-900/50">
        <div className="container-wrap">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              과목별 학습
            </h2>
            <p className="text-gray-500 dark:text-gray-400">원하는 과목을 선택해 AI 문제집과 동영상 강의를 시작하세요.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {subjects.map((s) => (
              <Link
                key={s.id}
                to={`/videos/${s.id}`}
                className="group card p-6 text-center hover:shadow-lg"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${s.colorFrom} ${s.colorTo} flex items-center justify-center text-3xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  {s.icon}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">{s.label}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{s.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 교육 프로그램 ────────────────────────────────────── */}
      <section className="section-y">
        <div className="container-wrap">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              교육 프로그램
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              목표에 맞는 프로그램을 선택하고 체계적으로 학습하세요.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((p) => (
              <div key={p.id} className="card overflow-hidden group">
                <div className={`h-2 bg-gradient-to-r ${p.colorClass}`} />
                <div className="p-6">
                  <div className="text-3xl mb-3">{p.icon}</div>
                  <span className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wide">{p.category}</span>
                  <h3 className="font-bold text-gray-900 dark:text-white mt-1 mb-2">{p.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">{p.description}</p>
                  <ul className="space-y-1">
                    {p.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blush-400 to-azure-400 flex-shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/programs" className="btn-primary">
              모든 프로그램 보기
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA 배너 ────────────────────────────────────────── */}
      <section className="section-y bg-gradient-to-br from-blush-500 via-coral-500 to-azure-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-white blur-3xl" />
        </div>
        <div className="container-wrap relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            AI와 함께하는 스마트 학습, 지금 시작하세요
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            EduAI와 함께라면 어디서든 나만의 속도로 학습할 수 있습니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/workbook/math"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 bg-white text-blush-600 font-bold hover:bg-blush-50 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              AI 문제집 시작하기
            </Link>
            <Link
              to="/videos/math"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 border-2 border-white text-white font-bold hover:bg-white/10 transition-all duration-200"
            >
              강의 둘러보기
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
