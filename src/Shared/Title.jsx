import React from 'react'

function Title({heading , title , titleFont}) {
  return (
    <div className='text-center my-10 font-bannerFont'>
      <h1 className='text-pink-600 text-3xl md:text-4xl lg:text-5xl mb-2'>{heading}</h1>
      <p className={`text-black/70 text-${titleFont}`}>{title}</p>
    </div>
  )
}

export default Title
