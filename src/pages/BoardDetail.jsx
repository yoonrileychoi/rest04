import { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { supabase } from '../lib/supabase.js'
import { useAuth } from '../contexts/AuthContext.jsx'

const CATEGORY_LABEL = { free: '자유게시판', notice: '공지사항', qna: 'Q&A' }

export default function BoardDetail() {
  const { category, id } = useParams()
  const { user, isAdmin } = useAuth()
  const navigate = useNavigate()
  const [post, setPost] = useState(null)
  const [comments, setComments] = useState([])
  const [commentText, setCommentText] = useState('')
  const [loading, setLoading] = useState(true)
  const [deleting, setDeleting] = useState(false)
  const [submittingComment, setSubmittingComment] = useState(false)

  useEffect(() => {
    fetchPost()
    fetchComments()
  }, [id])

  async function fetchPost() {
    const { data, error } = await supabase
      .from('board_posts')
      .select('*')
      .eq('id', id)
      .single()

    if (error || !data) { navigate('/board/free'); return }
    setPost(data)
    setLoading(false)
    await supabase.rpc('increment_views', { post_id: id })
  }

  async function fetchComments() {
    const { data } = await supabase
      .from('board_comments')
      .select('*')
      .eq('post_id', id)
      .order('created_at', { ascending: true })
    setComments(data ?? [])
  }

  async function handleDelete() {
    if (!confirm('게시글을 삭제하시겠습니까?')) return
    setDeleting(true)
    const { error } = await supabase.from('board_posts').delete().eq('id', id)
    if (!error) navigate(`/board/${category}`)
    else { alert('삭제에 실패했습니다.'); setDeleting(false) }
  }

  async function handleComment(e) {
    e.preventDefault()
    if (!commentText.trim()) return
    setSubmittingComment(true)
    const nickname = user.user_metadata?.nickname || user.email?.split('@')[0] || '익명'
    const { error } = await supabase.from('board_comments').insert({
      post_id: id,
      user_id: user.id,
      author_name: nickname,
      content: commentText.trim(),
    })
    if (!error) {
      setCommentText('')
      fetchComments()
    }
    setSubmittingComment(false)
  }

  async function handleDeleteComment(commentId) {
    if (!confirm('댓글을 삭제하시겠습니까?')) return
    await supabase.from('board_comments').delete().eq('id', commentId)
    fetchComments()
  }

  if (loading) {
    return <div className="min-h-screen pt-24 flex items-center justify-center text-gray-400 text-sm">불러오는 중...</div>
  }

  const isAuthor = user?.id === post?.user_id
  const canComment = user && (category !== 'qna' || isAdmin)
  const canDeleteComment = (commentId, commentUserId) => user && (user.id === commentUserId || isAdmin)

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          to={`/board/${category}`}
          className="inline-flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-blush-500 transition-colors mb-6"
        >
          <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" />
          </svg>
          {CATEGORY_LABEL[category] ?? '게시판'} 목록
        </Link>

        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
          {/* 게시글 헤더 */}
          <div className="px-8 py-6 border-b border-gray-100 dark:border-gray-800">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs bg-blush-100 dark:bg-blush-900/30 text-blush-600 dark:text-blush-400 px-2 py-0.5 rounded-full font-medium">
                {CATEGORY_LABEL[post.category]}
              </span>
              {post.is_pinned && (
                <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-500 px-2 py-0.5 rounded-full">공지</span>
              )}
            </div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{post.title}</h1>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <span>{post.author_name}</span>
                <span>{post.created_at?.slice(0, 10)}</span>
                <span>조회 {post.views}</span>
              </div>
              {(isAuthor || isAdmin) && (
                <div className="flex gap-2">
                  {isAuthor && (
                    <button
                      onClick={() => navigate(`/board/edit/${id}`)}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      수정
                    </button>
                  )}
                  <button
                    onClick={handleDelete}
                    disabled={deleting}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors disabled:opacity-50"
                  >
                    삭제
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* 게시글 내용 */}
          <div className="px-8 py-8">
            <div className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed whitespace-pre-wrap">
              {post.content}
            </div>
          </div>
        </div>

        {/* 댓글 */}
        <div className="mt-6">
          <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">
            댓글 {comments.length}개
          </h2>

          {/* 댓글 목록 */}
          {comments.length > 0 && (
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden mb-4">
              {comments.map((c, i) => (
                <div
                  key={c.id}
                  className={`px-6 py-4 ${i !== 0 ? 'border-t border-gray-100 dark:border-gray-800' : ''}`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{c.author_name}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-gray-400">{c.created_at?.slice(0, 10)}</span>
                      {canDeleteComment(c.id, c.user_id) && (
                        <button
                          onClick={() => handleDeleteComment(c.id)}
                          className="text-xs text-red-400 hover:text-red-500 transition-colors"
                        >
                          삭제
                        </button>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{c.content}</p>
                </div>
              ))}
            </div>
          )}

          {/* 댓글 작성 */}
          {canComment ? (
            <form onSubmit={handleComment} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-4">
              <textarea
                value={commentText}
                onChange={e => setCommentText(e.target.value)}
                rows={3}
                placeholder={category === 'qna' ? '관리자만 답변할 수 있습니다.' : '댓글을 입력하세요...'}
                className="w-full px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blush-400 text-sm resize-none"
              />
              <div className="flex justify-end mt-2">
                <button
                  type="submit"
                  disabled={submittingComment || !commentText.trim()}
                  className="px-4 py-2 rounded-lg bg-blush-500 hover:bg-blush-600 text-white text-sm font-medium transition-colors disabled:opacity-50"
                >
                  {submittingComment ? '등록 중...' : '댓글 등록'}
                </button>
              </div>
            </form>
          ) : !user ? (
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-4">
              댓글을 작성하려면{' '}
              <Link to="/login" className="text-blush-500 hover:underline font-medium">로그인</Link>
              {' '}하세요.
            </p>
          ) : (
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-4">
              Q&A 답변은 관리자만 작성할 수 있습니다.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
