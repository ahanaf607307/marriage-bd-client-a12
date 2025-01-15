import React from 'react'
import useAuth from '../Firebase/UseAuth/useAuth'
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure'

function useAdmin() {
const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
const {data : isAdmin , isPending : isAdminLoadig} = useQuery({
    queryKey : [user?.email , 'isAdmin'],
    queryFn : async () => {
        const res = await axiosSecure.get(`/users/admin/${user.email}` )
        return res.data?.admin
    }
})

  return [isAdmin , isAdminLoadig]
}

export default useAdmin
