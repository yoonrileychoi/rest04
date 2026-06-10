import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../lib/supabase.js'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isAdmin, setIsAdmin] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      if (session?.user) fetchRole(session.user.id)
      else setLoading(false)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
      if (session?.user) fetchRole(session.user.id)
      else { setIsAdmin(false); setLoading(false) }
    })

    return () => subscription.unsubscribe()
  }, [])

  async function fetchRole(userId) {
    const { data, error } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', userId)
      .single()

    if (error?.code === 'PGRST116') {
      const { data: { user } } = await supabase.auth.getUser()
      const meta = user?.user_metadata ?? {}
      const nickname = meta.nickname || meta.full_name || meta.name
        || (user?.email ? user.email.split('@')[0] : '사용자')
      await supabase.from('profiles').insert({ id: userId, nickname })
    }

    setIsAdmin(data?.role === 'admin')
    setLoading(false)
  }

  async function signUp(email, password, nickname) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { nickname } },
    })
    return { data, error }
  }

  async function signIn(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    return { data, error }
  }

  async function signInWithKakao() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'kakao',
      options: {
        redirectTo: window.location.origin + '/rest04/',
      },
    })
    return { data, error }
  }

  async function signOut() {
    await supabase.auth.signOut()
    setIsAdmin(false)
  }

  return (
    <AuthContext.Provider value={{ user, isAdmin, loading, signUp, signIn, signInWithKakao, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
