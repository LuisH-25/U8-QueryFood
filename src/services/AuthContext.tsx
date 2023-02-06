import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { supabase } from '../supabase/client'

export const AuthContext = createContext({
  user: null
})

export const AuthProvider = ({ children } : any) => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(async () => checkUser())

    const checkUser = async () => {
      const user = supabase.auth.getUser()
    //   if (user) {
    //   //  setUser(user)
    //     navigate('/', { replace: true })
    //   } else {
    //     navigate('/login', { replace: true })
    //   }
    }
    checkUser()
    return () => {
      //authListener?.unsubscribe( )
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user }}>
      { children }
    </AuthContext.Provider>
  )
}
