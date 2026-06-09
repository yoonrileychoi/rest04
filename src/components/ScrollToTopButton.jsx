import { useState, useEffect } from 'react'

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="맨 위로"
      className={`fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full
        bg-gradient-to-br from-blush-500 to-coral-500 text-white shadow-lg
        flex items-center justify-center transition-all duration-300
        hover:scale-110 hover:shadow-xl
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  )
}
