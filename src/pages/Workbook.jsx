import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { subjects, workbooks as allWorkbooks } from '../data/site.js'

const difficultyColor = {
  기초: 'bg-sage-100 dark:bg-sage-900/30 text-sage-700 dark:text-sage-300',
  표준: 'bg-azure-100 dark:bg-azure-900/30 text-azure-700 dark:text-azure-300',
  심화: 'bg-coral-100 dark:bg-coral-900/30 text-coral-700 dark:text-coral-300',
}

function WorkbookCard({ book }) {
  return (
    <div className="card p-6 flex flex-col gap-4">
      {/* 상단 배지 */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className={`subject-badge ${difficultyColor[book.difficulty]}`}>
          {book.difficulty}
        </span>
        <span className="subject-badge bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
          {book.level}
        </span>
        <span className="ml-auto text-xs text-gray-400 dark:text-gray-500">{book.pages}쪽</span>
      </div>

      {/* 아이콘 + 제목 */}
      <div className="flex items-start gap-4">
        <div className="w-14 h-18 rounded-lg bg-gradient-to-b from-blush-200 to-azure-200 dark:from-blush-800/50 dark:to-azure-800/50 flex items-center justify-center flex-shrink-0 text-2xl shadow-sm" style={{ height: '72px' }}>
          📚
        </div>
        <div>
          <h3 className="font-bold text-gray-900 dark:text-white leading-snug mb-1">{book.title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{book.description}</p>
        </div>
      </div>

      {/* 태그 */}
      <div className="flex flex-wrap gap-1.5">
        {book.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-full bg-blush-50 dark:bg-blush-900/20 text-blush-600 dark:text-blush-300 font-medium"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* CTA */}
      <div className="flex gap-2 mt-auto pt-2 border-t border-gray-100 dark:border-gray-800">
        <button className="flex-1 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-blush-500 to-coral-500 text-white hover:from-blush-600 hover:to-coral-600 transition-all duration-200 shadow-sm">
          미리보기
        </button>
        <button className="flex-1 py-2.5 rounded-xl text-sm font-semibold border-2 border-azure-400 dark:border-azure-500 text-azure-600 dark:text-azure-300 hover:bg-azure-50 dark:hover:bg-azure-900/20 transition-all duration-200">
          PDF 다운로드
        </button>
      </div>
    </div>
  )
}

/* ── AI 문제 생성 데모 배너 ── */
function AiGeneratorBanner({ subject }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blush-500 to-azure-500 p-8 mb-10 text-white">
      <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full bg-white/10 blur-2xl" />
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          AI 문제 생성기
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold mb-2">
          나만의 맞춤 문제집을 AI로 즉시 생성하세요
        </h2>
        <p className="text-white/80 mb-6 max-w-lg">
          학년, 단원, 난이도를 선택하면 AI가 최적화된 문제를 자동으로 구성합니다.
          오답 노트 분석으로 약점도 보완할 수 있습니다.
        </p>
        <div className="flex flex-wrap gap-3">
          <button className="rounded-full px-6 py-3 bg-white text-blush-600 font-bold text-sm hover:bg-blush-50 transition-colors shadow">
            🤖 AI 문제집 생성하기
          </button>
          <button className="rounded-full px-6 py-3 border-2 border-white text-white font-bold text-sm hover:bg-white/10 transition-colors">
            오답 노트 분석
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Workbook() {
  const { subject } = useParams()
  const navigate = useNavigate()

  const currentSubject = subjects.find((s) => s.id === subject) || subjects[0]
  const books = allWorkbooks[subject] || allWorkbooks.math

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [subject])

  return (
    <>
      {/* ── 페이지 헤더 ── */}
      <div className="page-hero">
        <div className="container-wrap">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link to="/" className="hover:text-blush-500 transition-colors">홈</Link>
            <span>›</span>
            <span className="text-gray-600 dark:text-gray-300">AI 문제집</span>
            <span>›</span>
            <span className="text-blush-600 dark:text-blush-300 font-medium">{currentSubject.label}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
            AI 문제집
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            AI가 생성한 개인 맞춤형 문제집으로 학습 효율을 높이세요.
          </p>
        </div>
      </div>

      <div className="container-wrap section-y">
        {/* ── 과목 탭 ── */}
        <div className="flex flex-wrap gap-2 mb-10">
          {subjects.map((s) => (
            <button
              key={s.id}
              onClick={() => navigate(`/workbook/${s.id}`)}
              className={`tab-btn ${s.id === subject ? 'active' : ''}`}
            >
              <span className="mr-1">{s.icon}</span>
              {s.label}
            </button>
          ))}
        </div>

        {/* ── AI 생성기 배너 ── */}
        <AiGeneratorBanner subject={currentSubject} />

        {/* ── 문제집 목록 ── */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-bold text-gray-900 dark:text-white">
            {currentSubject.label} 문제집 <span className="text-blush-500">({books.length}종)</span>
          </h2>
          <div className="flex gap-2">
            <span className={`subject-badge ${difficultyColor['기초']}`}>기초</span>
            <span className={`subject-badge ${difficultyColor['표준']}`}>표준</span>
            <span className={`subject-badge ${difficultyColor['심화']}`}>심화</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <WorkbookCard key={book.id} book={book} />
          ))}
        </div>

        {/* ── AI 생성 홍보 하단 ── */}
        <div className="mt-12 text-center py-12 rounded-2xl border-2 border-dashed border-blush-200 dark:border-blush-800 bg-blush-50/50 dark:bg-blush-900/10">
          <div className="text-4xl mb-3">✨</div>
          <h3 className="font-bold text-gray-900 dark:text-white mb-2">원하는 문제집이 없나요?</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 max-w-sm mx-auto">
            학년·단원·난이도를 직접 설정해 AI가 맞춤 문제집을 바로 생성해 드립니다.
          </p>
          <button className="btn-primary">
            🤖 맞춤 문제집 생성하기
          </button>
        </div>
      </div>
    </>
  )
}
