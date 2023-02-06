import { supabase } from '../services/config'

export const signInWithEmail = async (email : any, password : any) => {
  const result = await supabase.auth.signIn({
    email,
    password
  })
  return result
}

export const signUpWithEmail = async (data: any) => {
  const result = await supabase.auth.signUp(data)
  return result
}

export const updateProfile = async (data: any) => {
  try {
    await supabase.from('profiles').upsert(data)
  } catch (error) {
    console.error(error)
  }
}
export const logout = async () => {
  const result = await supabase.auth.signOut()
  return result
}

export const getUserProfile = async () => {
  try {
    const user = supabase.auth.user()

    if (user) {
      const { id, app_metadata, user_metadata } = user
      if (app_metadata.provider === 'google') {
        const { nombre } = user_metadata
        return { username: nombre }
      }

      const { data, error, status } = await supabase
        .from('profiles')
        .select('id, nombre, updated_at')
        .eq('id', id)
        .single()

      if (error && status === 406) {
        throw new Error('An error has ocurred')
      }

      return {
        username: data.nombre
      }
    }
  } catch (error) {
    console.log(error)
  }
}



