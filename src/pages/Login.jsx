import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext.jsx'

function KakaoIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M12 3C6.477 3 2 6.477 2 10.8c0 2.7 1.618 5.077 4.077 6.554L5.1 21l4.477-2.477C10.3 18.846 11.135 19 12 19c5.523 0 10-3.477 10-7.8C22 6.477 17.523 3 12 3z" />
    </svg>
  )
}

export default function Login() {
  const [mode, setMode] = useState('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [nickname, setNickname] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const { signIn, signUp, signInWithKakao } = useAuth()
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setMessage('')
    setLoading(true)

    if (mode === 'login') {
      const { error } = await signIn(email, password)
      if (error) setError('이메일 또는 비밀번호가 올바르지 않습니다.')
      else navigate('/')
    } else {
      if (password.length < 6) {
        setError('비밀번호는 6자 이상이어야 합니다.')
        setLoading(false)
        return
      }
      const { error } = await signUp(email, password, nickname)
      if (error) {
        setError(error.message.includes('already') ? '이미 사용 중인 이메일입니다.' : error.message)
      } else {
        setMessage('가입 확인 이메일을 보냈습니다. 이메일을 확인해주세요.')
      }
    }
    setLoading(false)
  }

  async function handleKakao() {
    setError('')
    const { error } = await signInWithKakao()
    if (error) setError('카카오 로그인에 실패했습니다.')
  }

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 p-8">

          {/* 탭 */}
          <div className="flex rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 mb-8">
            <button
              onClick={() => { setMode('login'); setError(''); setMessage('') }}
              className={`flex-1 py-2.5 text-sm font-medium transition-colors ${
                mode === 'login' ? 'bg-blush-500 text-white' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
            >
              로그인
            </button>
            <button
              onClick={() => { setMode('signup'); setError(''); setMessage('') }}
              className={`flex-1 py-2.5 text-sm font-medium transition-colors ${
                mode === 'signup' ? 'bg-blush-500 text-white' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
            >
              회원가입
            </button>
          </div>

          {/* 카카오 로그인 */}
          <button
            onClick={handleKakao}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#FEE500] hover:bg-[#FFDC00] text-[#3C1E1E] font-medium text-sm transition-colors mb-4"
          >
            <KakaoIcon />
            카카오로 {mode === 'login' ? '로그인' : '가입하기'}
          </button>

          <div className="flex items-center gap-3 mb-4">
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
            <span className="text-xs text-gray-400">또는 이메일로</span>
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
          </div>

          {/* 이메일 폼 */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'signup' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">닉네임</label>
                <input
                  type="text"
                  value={nickname}
                  onChange={e => setNickname(e.target.value)}
                  required
                  placeholder="닉네임을 입력하세요"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blush-400 text-sm"
                />
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">이메일</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                placeholder="이메일을 입력하세요"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blush-400 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">비밀번호</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                placeholder="비밀번호를 입력하세요"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blush-400 text-sm"
              />
            </div>

            {error && <p className="text-red-500 text-sm bg-red-50 dark:bg-red-900/20 rounded-lg px-3 py-2">{error}</p>}
            {message && <p className="text-green-600 text-sm bg-green-50 dark:bg-green-900/20 rounded-lg px-3 py-2">{message}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg bg-blush-500 hover:bg-blush-600 text-white font-medium text-sm transition-colors disabled:opacity-60"
            >
              {loading ? '처리 중...' : mode === 'login' ? '로그인' : '가입하기'}
            </button>
          </form>

          <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-6">
            <Link to="/" className="hover:text-blush-500 transition-colors">← 홈으로 돌아가기</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
