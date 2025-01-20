import React from 'react'

function BannarAll({bannerHeading , bannerTitle}) {
  return (
    <div className="bg-banner h-52 md:h-[250px] lg:h-[360px] xl:h-[450px] w-full bg-cover object-fill bg-center font-bannerFont">
    <div className="bg-pink-800/80 h-full w-full  flex flex-col justify-center items-center text-center">
      <h1 className=" text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white px-10  lg:px-32 xl:px-56">
       {bannerHeading}
      </h1>
      <p className=" text-md mt-5 text-center text-white px-10  lg:px-32 xl:px-56">
       {bannerTitle}
      </p>
    </div>
  </div>
  )
}

export default BannarAll
