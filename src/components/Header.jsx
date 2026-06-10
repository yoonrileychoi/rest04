import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { nav } from '../data/site.js'
import { useAuth } from '../contexts/AuthContext.jsx'

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

const swatches = [
  { id: 'blush', color: '#EC7A9A', name: '핑크' },
  { id: 'azure', color: '#3892D8', name: '블루' },
  { id: 'sage',  color: '#1AA27F', name: '민트' },
  { id: 'plum',  color: '#8B58E8', name: '퍼플' },
  { id: 'coral', color: '#F5465A', name: '코럴' },
]

export default function Header({ isDark, setIsDark, theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState(null)
  const [mobileExpanded, setMobileExpanded] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const timerRef = useRef(null)
  const { user, signOut } = useAuth()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setMobileExpanded(null)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  function enter(label) {
    clearTimeout(timerRef.current)
    setActiveMenu(label)
  }
  function leave() {
    timerRef.current = setTimeout(() => setActiveMenu(null), 150)
  }

  const linkBase = 'px-4 py-2 rounded-lg text-sm font-medium transition-colors inline-flex items-center gap-1'
  const linkActive = 'text-blush-600 dark:text-blush-300 bg-blush-50 dark:bg-blush-900/20'
  const linkIdle = 'text-gray-700 dark:text-gray-300 hover:text-blush-600 dark:hover:text-blush-300 hover:bg-blush-50 dark:hover:bg-blush-900/20'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-sm'
          : 'bg-white dark:bg-gray-950'
      }`}
    >
      <div className="max-w-container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* 로고 */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blush-400 to-azure-400 flex items-center justify-center text-white font-bold text-sm select-none">
              E
            </div>
            <span className="font-bold text-lg text-gray-900 dark:text-white leading-none">
              Edu<span className="text-blush-500">AI</span>
            </span>
          </Link>

          {/* 데스크탑 GNB */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {nav.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && enter(item.label)}
                onMouseLeave={leave}
              >
                <NavLink
                  to={item.children ? item.children[0].path : item.path}
                  end={!item.children && item.path === '/'}
                  className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkIdle}`}
                >
                  {item.label}
                  {item.children && (
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 opacity-60 mt-px">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  )}
                </NavLink>

                {item.children && (
                  <div
                    className={`absolute top-full left-0 mt-1 min-w-[160px] bg-white dark:bg-gray-900
                      rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden
                      transition-all duration-200 origin-top ${
                        activeMenu === item.label
                          ? 'opacity-100 scale-100 pointer-events-auto'
                          : 'opacity-0 scale-95 pointer-events-none'
                      }`}
                  >
                    {item.children.map((child) => (
                      <NavLink
                        key={child.label}
                        to={child.path}
                        className={({ isActive }) =>
                          `block px-4 py-2.5 text-sm transition-colors ${
                            isActive
                              ? 'text-blush-600 dark:text-blush-300 bg-blush-50 dark:bg-blush-900/20 font-medium'
                              : 'text-gray-700 dark:text-gray-300 hover:text-blush-600 dark:hover:text-blush-300 hover:bg-blush-50 dark:hover:bg-blush-900/20'
                          }`
                        }
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* 우측: 컬러 팔레트 + 다크모드 토글 + 모바일 버거 */}
          <div className="flex items-center gap-1">
            {/* 컬러 팔레트 테마 전환 */}
            <div className="hidden sm:flex items-center gap-1.5 px-2">
              {swatches.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setTheme(s.id)}
                  title={s.name}
                  aria-label={`${s.name} 테마`}
                  className={`rounded-full transition-all duration-200 ${
                    theme === s.id
                      ? 'w-5 h-5 ring-2 ring-offset-2 ring-gray-400 dark:ring-gray-400 scale-110'
                      : 'w-4 h-4 hover:scale-110 opacity-70 hover:opacity-100'
                  }`}
                  style={{ backgroundColor: s.color }}
                />
              ))}
            </div>
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={isDark ? '라이트 모드' : '다크 모드'}
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>

            {/* 로그인/로그아웃 버튼 */}
            {user ? (
              <button
                onClick={async () => { await signOut(); navigate('/') }}
                className="hidden sm:block px-3 py-1.5 rounded-lg text-xs font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border border-gray-200 dark:border-gray-700"
              >
                로그아웃
              </button>
            ) : (
              <Link
                to="/login"
                className="hidden sm:block px-3 py-1.5 rounded-lg text-xs font-medium bg-blush-500 hover:bg-blush-600 text-white transition-colors"
              >
                로그인
              </Link>
            )}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="메뉴 열기"
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
                <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
                <span className={`block h-0.5 bg-current rounded transition-all duration-300 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* 모바일 오버레이 */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: '64px' }}
      />

      {/* 모바일 슬라이드 패널 */}
      <div
        className={`fixed right-0 z-50 w-4/5 max-w-xs bg-white dark:bg-gray-950
          h-[calc(100dvh-4rem)] overflow-y-auto shadow-2xl
          transition-transform duration-300 lg:hidden ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        style={{ top: '64px' }}
      >
        <div className="p-4 space-y-1">
          {nav.map((item) => (
            <div key={item.label} className="border-b border-gray-100 dark:border-gray-800 last:border-0">
              {item.children ? (
                <>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    className="w-full flex items-center justify-between py-3.5 px-2 text-gray-800 dark:text-gray-200 font-medium text-sm"
                  >
                    {item.label}
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className={`w-4 h-4 opacity-60 transition-transform duration-200 ${mobileExpanded === item.label ? 'rotate-180' : ''}`}
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${mobileExpanded === item.label ? 'max-h-96 pb-2' : 'max-h-0'}`}>
                    <div className="pl-4 space-y-0.5">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.label}
                          to={child.path}
                          className={({ isActive }) =>
                            `block py-2 px-2 text-sm rounded-lg ${
                              isActive
                                ? 'text-blush-600 dark:text-blush-300 font-semibold bg-blush-50 dark:bg-blush-900/20'
                                : 'text-gray-600 dark:text-gray-400 hover:text-blush-600 dark:hover:text-blush-300'
                            }`
                          }
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `block py-3.5 px-2 text-sm font-medium rounded-lg ${
                      isActive
                        ? 'text-blush-600 dark:text-blush-300 bg-blush-50 dark:bg-blush-900/20'
                        : 'text-gray-800 dark:text-gray-200 hover:text-blush-600 dark:hover:text-blush-300'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}
