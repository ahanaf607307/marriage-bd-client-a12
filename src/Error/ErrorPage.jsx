import React from 'react'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <h1 className='text-[200px] font-bannerFont text-red-600'>404</h1>
      <h1 className='text-5xl text-red-600 font-bannerFont'>ERROR PAGE</h1>
      <Link to='/' className='flex hover:scale-105 duration-150 items-center gap-x-5 my-8 text-pink-600 bg-pink-200 px-5 py-3 rounded-xl shadow-xl'><FaHome className='text-2xl ' />Home</Link>
    </div>
  )
}

export default ErrorPage
