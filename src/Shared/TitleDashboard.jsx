import React from 'react'

function TitleDashboard({heading , title , titleFont}) {
  return (
    <div className='text-center  font-bannerFont'>
      <h1 className='text-white/90 text-3xl md:text-4xl lg:text-5xl mb-2'>{heading}</h1>
      <p className={`text-white/90 text-${titleFont}`}>{title}</p>
    </div>
  )
}

export default TitleDashboard
