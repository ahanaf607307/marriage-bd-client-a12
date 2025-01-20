import { Spinner } from 'flowbite-react'
import React from 'react'

function Loading() {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
       <Spinner aria-label="Extra large spinner example" size="xl" />
    </div>
  )
}

export default Loading
