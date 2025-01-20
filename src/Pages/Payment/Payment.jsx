import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React from 'react'
import Title from '../../Shared/Title'
import CheckOutForm from './CheckOutForm'
import useAuth from '../../Firebase/UseAuth/useAuth'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import { FloatingLabel } from 'flowbite-react'
import useAxiosSecure from '../../Hook/useAxiosSecure'

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY)

function Payment() {
const axiosSecure = useAxiosSecure()
const {user} = useAuth()
  const { id } = useParams();
  const { data: details = []  } = useQuery({
    queryKey: ["details"],

    queryFn: async () => {
      const res = await axiosSecure.get(`/details/${id}`);
      return res.data;
    },
  });


  return (
    <div className="px-4 md:max-w-sm lg:max-w-md xl:max-w-lg mx-auto">
    <Title heading={`Pay Now`} title={`Pay 5 $ For See Contact Information . After Pay wait sometime . `} />
    <h1 className='text-center text-sm text-pink-500 my-2'>Copy to use for test</h1>
    <h1 className='text-center text-sm text-pink-500 my-5'>Test Card : 4242 4242 4242 4242  Date : 5/26 CVC : 123 ZIP : 42424</h1>
    <FloatingLabel className='mb-2' defaultValue={details?.biodataId} readOnly  variant="filled" label="Biodata Id" />
    <FloatingLabel className='mb-8' defaultValue={user?.email}  readOnly variant="filled" label="Your Email " />
   <div>
   <Elements stripe={stripePromise}>
      <CheckOutForm details={details}/>
    </Elements>
   </div>
    </div>
  )
}

export default Payment
