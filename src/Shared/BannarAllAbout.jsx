import React from 'react'

function BannerAllAbout({bannerHeading , bannerTitle , bannerTitle2 , bannerTitle3}) {
  return (
    <div className="bg-bannerAbout  h-52 min-h-[calc(100vh-148px)]  w-full bg-cover object-fill bg-center font-bannerFont">
    <div className="bg-pink-800/30 h-full w-full  flex flex-col justify-center items-center text-center">
      <h1 className=" text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white px-10  lg:px-32 xl:px-56">
       {bannerHeading}
      </h1>
      <h1 className="text-sm md:text-md mt-4 text-center text-white/80 px-10 ">
       {bannerTitle}
      </h1>
      <h1 className="text-sm md:text-md mt-4 text-center text-white/80 px-10 ">
       {bannerTitle2}
      </h1>
      <h1 className="text-sm md:text-md mt-4 text-center text-white/80 px-10 ">
       {bannerTitle3}
      </h1>
    </div>
  </div>
  )
}

export default BannerAllAbout
