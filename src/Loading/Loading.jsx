import { Spinner } from 'flowbite-react'
import React from 'react'
import loadingSpinner from '../assets/loading/loadingSpinner.json'
import Lottie from 'lottie-react'

function Loading() {
  return (
    <div className='lg:h-[200px] flex flex-col justify-center items-center'>
      <Lottie animationData={loadingSpinner} className='w-24 h-24' />
    </div>
  )
}

export default Loading
