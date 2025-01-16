import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAuth from '../../Firebase/UseAuth/useAuth'
import useAxiosPublic from '../../Hook/UseAxiosPublic'
import Title from '../../Shared/Title'

function MyContactRequest() {
   const axiosPublic = useAxiosPublic()
   const {user} = useAuth()
   const {data : contacts = [] , refetch} = useQuery({
    queryKey : ['contacts'],
    queryFn : async () => {
      const res = await axiosPublic.get(`/contact-request/${user.email}`)
      return res.data
    }
   })
  return (
    <div>
      <Title heading={`My Contact Request`} />
      <h1 className='text-4xl text-center'>{contacts.length}</h1>
    </div>
  )
}

export default MyContactRequest
