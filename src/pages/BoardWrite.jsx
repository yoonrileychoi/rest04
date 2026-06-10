import { useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { supabase } from '../lib/supabase.js'
import { useAuth } from '../contexts/AuthContext.jsx'

const CATEGORY_OPTIONS = [
  { id: 'free',   label: '자유게시판' },
  { id: 'qna',    label: 'Q&A' },
  { id: 'notice', label: '공지사항', adminOnly: true },
]

export default function BoardWrite() {
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const isEdit = !!id
  const { user, isAdmin } = useAuth()
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState(searchParams.get('category') || 'free')
  const [isPinned, setIsPinned] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const availableCategories = CATEGORY_OPTIONS.filter(c => !c.adminOnly || isAdmin)

  useEffect(() => {
    if (!user) { navigate('/login'); return }
    if (isEdit) loadPost()
  }, [user, id])

  async function loadPost() {
    const { data, error } = await supabase.from('board_posts').select('*').eq('id', id).single()
    if (error || !data) { navigate('/board/free'); return }
    if (data.user_id !== user.id && !isAdmin) { navigate('/board/free'); return }
    setTitle(data.title)
    setContent(data.content)
    setCategory(data.category)
    setIsPinned(data.is_pinned)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!title.trim() || !content.trim()) {
      setError('제목과 내용을 모두 입력해주세요.')
      return
    }
    if (category === 'notice' && !isAdmin) {
      setError('공지사항은 관리자만 작성할 수 있습니다.')
      return
    }
    setLoading(true)
    setError('')

    const nickname = user.user_metadata?.nickname || user.user_metadata?.full_name || user.user_metadata?.name || user.email?.split('@')[0] || '익명'

    if (isEdit) {
      const { error } = await supabase
        .from('board_posts')
        .update({
          title: title.trim(),
          content: content.trim(),
          is_pinned: isPinned,
          updated_at: new Date().toISOString(),
        })
        .eq('id', id)
      if (error) { setError('수정에 실패했습니다.'); setLoading(false); return }
      navigate(`/board/${category}/${id}`)
    } else {
      const { data, error } = await supabase
        .from('board_posts')
        .insert({
          title: title.trim(),
          content: content.trim(),
          category,
          user_id: user.id,
          author_name: nickname,
          is_pinned: isPinned,
        })
        .select('id')
        .single()
      if (error) { setError('작성에 실패했습니다.'); setLoading(false); return }
      navigate(`/board/${category}/${data.id}`)
    }
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
          {isEdit ? '게시글 수정' : '새 글 작성'}
        </h1>

        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-8 space-y-5">

          {/* 카테고리 선택 */}
          {!isEdit && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">게시판</label>
              <div className="flex gap-2">
                {availableCategories.map(c => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setCategory(c.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      category === c.id
                        ? 'bg-blush-500 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 공지 고정 (관리자만) */}
          {isAdmin && (
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={isPinned}
                onChange={e => setIsPinned(e.target.checked)}
                className="w-4 h-4 accent-blush-500"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">상단 고정 (공지)</span>
            </label>
          )}

          {/* 제목 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">제목</label>
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              maxLength={100}
              placeholder="제목을 입력하세요"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blush-400 text-sm"
            />
          </div>

          {/* 내용 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">내용</label>
            <textarea
              value={content}
              onChange={e => setContent(e.target.value)}
              rows={14}
              placeholder="내용을 입력하세요"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blush-400 text-sm resize-y"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm bg-red-50 dark:bg-red-900/20 rounded-lg px-3 py-2">{error}</p>
          )}

          <div className="flex gap-3 justify-end pt-2">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-5 py-2.5 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              취소
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-5 py-2.5 rounded-lg bg-blush-500 hover:bg-blush-600 text-white text-sm font-medium transition-colors disabled:opacity-60"
            >
              {loading ? '저장 중...' : isEdit ? '수정 완료' : '등록'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
