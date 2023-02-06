import { useEffect, useState } from 'react'

import { updateProfile } from '../services/auth'

const useProfile = () => {
  const [userProfile, setUserProfile] = useState(null)

  useEffect(() => {
    const getProfile = async () => {
    //  const result : any = await updateProfile()
    //   if (result) {
    //     setUserProfile(result)
    //   }
    }
    getProfile()
  }, [])
  return userProfile
}

export default useProfile