import { useEffect } from 'react'
import { supabase } from '@/config/supabase/supabaseClient.ts'
import { userStore } from '@/store/authStore.ts'

export const AuthHandler = () => {
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        userStore.setLogged(true, session)
      } else {
        userStore.clearStore()
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  return null
}
