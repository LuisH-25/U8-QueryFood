import { supabase } from '../supabase/client'

export const signInWithEmail = async (email : any, password : any) => {
  const result = await supabase.auth.signInWithPassword({
    email,
    password
  })
  return result
}


export const signUpWithEmail = async (data: any) => {
  const result = await supabase.auth.signUp(data)
  return result
}

export const updateProfile = async (user: any) => {
  try {
    // const user = await supabase.auth.user();
    // console.log("DATAAAAA::", user );
    // await supabase.from('profiles').insert(data)
    // await supabase.from("profiles").upsert([{
    //   data, { returning: 'minimal' }
    // }]);
    const {data, error}=await supabase.from('profiles').upsert(user);
    console.log("error:", error);
  } catch (error) {
    console.error(error)
  }
}

//Log out
export const logout = async () => {
  const result = await supabase.auth.signOut()
  return result
}

export const getUser = async () =>{
  const result = await supabase.auth.getUser();
  return result;
}

export const getSession = async () =>{
  const result = await supabase.auth.getSession();
  return result;
}

// export const getUserProfile = async () => {
//   try {
//     const user = supabase.auth.getUser()

//     if (user) {
//       const { id, app_metadata, user_metadata } = user
//       if (app_metadata.provider === 'google') {
//         const { nombre } = user_metadata
//         return { username: nombre }
//       }

//       const { data, error, status } = await supabase
//         .from('profile')
//         .select('id, nombre, updated_at')
//         .eq('id', id)
//         .single()

//       if (error && status === 406) {
//         throw new Error('An error has ocurred')
//       }

//       return {
//         username: data.nombre
//       }
//     }
//   } catch (error) {
//     console.log(error)
//   }
// }

