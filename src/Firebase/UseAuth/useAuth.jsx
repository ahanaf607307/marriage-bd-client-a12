import { useContext } from 'react'
import { AuthContext } from '../AuthProvider/AuthProvider'

function useAuth() {
    const auth= useContext(AuthContext)
  return auth
}

export default useAuth
