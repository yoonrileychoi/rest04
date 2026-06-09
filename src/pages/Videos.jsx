import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { subjects, videos as allVideos } from '../data/site.js'

const VIDEOS_PER_PAGE = 6   /* 2열 × 3행 */

/* ── YouTube 영상 카드 ── */
function VideoCard({ video }) {
  const [playing, setPlaying] = useState(false)
  const isPlaceholder = !video.youtubeId || video.youtubeId === 'YOUTUBE_ID_HERE'

  return (
    <div className="card overflow-hidden group">
      {/* 썸네일 / 플레이어 영역 (16:9) */}
      <div className="video-ratio">
        {isPlaceholder ? (
          /* 플레이스홀더 — 실제 YouTube ID로 교체 필요 */
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-blush-100 to-azure-100 dark:from-gray-800 dark:to-gray-700">
            <div className="w-16 h-16 rounded-full bg-white/80 dark:bg-gray-900/80 flex items-center justify-center mb-3 shadow">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-blush-500 translate-x-0.5">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 px-4 text-center">
              YouTube ID를 입력해 주세요<br />
              <code className="text-blush-500 text-[10px]">src/data/site.js</code>
            </p>
          </div>
        ) : playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          /* 썸네일 클릭 → 재생 */
          <button
            onClick={() => setPlaying(true)}
            className="absolute inset-0 w-full h-full block"
          >
            <img
              src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
              alt={video.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blush-600 translate-x-0.5">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </button>
        )}
      </div>

      {/* 메타 정보 */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="subject-badge bg-azure-100 dark:bg-azure-900/30 text-azure-700 dark:text-azure-300">
            {video.level}
          </span>
          <span className="text-xs text-gray-400 dark:text-gray-500">{video.date}</span>
          {video.views && <span className="text-xs text-gray-400 dark:text-gray-500 ml-auto">조회 {video.views}</span>}
        </div>
        <h3 className="font-bold text-gray-900 dark:text-white text-sm leading-snug line-clamp-2 mb-1">
          {video.title}
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
          {video.description}
        </p>
      </div>
    </div>
  )
}

/* ── 페이지네이션 ── */
function Pagination({ page, total, onChange }) {
  if (total <= 1) return null
  return (
    <div className="flex items-center justify-center gap-2 mt-10">
      <button
        onClick={() => onChange(1)}
        disabled={page === 1}
        className="px-3 py-2 rounded-lg text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-30 transition-colors"
        aria-label="첫 페이지"
      >
        «
      </button>
      <button
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        className="px-3 py-2 rounded-lg text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-30 transition-colors"
        aria-label="이전 페이지"
      >
        ‹
      </button>
      {Array.from({ length: total }, (_, i) => i + 1).map((n) => (
        <button
          key={n}
          onClick={() => onChange(n)}
          className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${
            n === page
              ? 'bg-gradient-to-r from-blush-500 to-azure-500 text-white shadow-sm'
              : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
          }`}
        >
          {n}
        </button>
      ))}
      <button
        onClick={() => onChange(page + 1)}
        disabled={page === total}
        className="px-3 py-2 rounded-lg text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-30 transition-colors"
        aria-label="다음 페이지"
      >
        ›
      </button>
      <button
        onClick={() => onChange(total)}
        disabled={page === total}
        className="px-3 py-2 rounded-lg text-sm text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-30 transition-colors"
        aria-label="마지막 페이지"
      >
        »
      </button>
    </div>
  )
}

export default function Videos() {
  const { subject } = useParams()
  const navigate = useNavigate()
  const [page, setPage] = useState(1)

  const currentSubject = subjects.find((s) => s.id === subject) || subjects[0]
  const subjectVideos = allVideos[subject] || allVideos.math
  const totalPages = Math.ceil(subjectVideos.length / VIDEOS_PER_PAGE)
  const pageVideos = subjectVideos.slice((page - 1) * VIDEOS_PER_PAGE, page * VIDEOS_PER_PAGE)

  /* 과목 변경 시 첫 페이지로 */
  useEffect(() => {
    setPage(1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [subject])

  function handleSubjectChange(id) {
    navigate(`/videos/${id}`)
  }

  function handlePageChange(n) {
    setPage(n)
    window.scrollTo({ top: 250, behavior: 'smooth' })
  }

  return (
    <>
      {/* ── 페이지 헤더 ── */}
      <div className="page-hero">
        <div className="container-wrap">
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
            <Link to="/" className="hover:text-blush-500 transition-colors">홈</Link>
            <span>›</span>
            <span className="text-gray-600 dark:text-gray-300">동영상 강의</span>
            <span>›</span>
            <span className="text-blush-600 dark:text-blush-300 font-medium">{currentSubject.label}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
            동영상 강의
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            전문 강사진의 핵심 강의를 언제 어디서나 시청하세요.
          </p>
        </div>
      </div>

      <div className="container-wrap section-y">
        {/* ── 과목 탭 ── */}
        <div className="flex flex-wrap gap-2 mb-10">
          {subjects.map((s) => (
            <button
              key={s.id}
              onClick={() => handleSubjectChange(s.id)}
              className={`tab-btn ${s.id === subject ? 'active' : ''}`}
            >
              <span className="mr-1">{s.icon}</span>
              {s.label}
            </button>
          ))}
        </div>

        {/* ── 현재 과목 설명 ── */}
        <div className="flex items-center gap-4 mb-8">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${currentSubject.colorFrom} ${currentSubject.colorTo} flex items-center justify-center text-2xl flex-shrink-0`}>
            {currentSubject.icon}
          </div>
          <div>
            <h2 className="font-bold text-gray-900 dark:text-white">{currentSubject.label} 강의</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">{currentSubject.description}</p>
          </div>
          <span className="ml-auto text-sm text-gray-400 dark:text-gray-500">
            총 {subjectVideos.length}개 강의
          </span>
        </div>

        {/* ── 2열 × 3행 동영상 그리드 ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {pageVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

        {/* ── 페이지네이션 ── */}
        <Pagination page={page} total={totalPages} onChange={handlePageChange} />

      </div>
    </>
  )
}
