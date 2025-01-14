import React from "react";

function Banner() {
  return (
    <div className="bg-banner h-80  md:h-[450px] lg:h-[600px] xl:h-[700px] w-full bg-cover object-fill bg-center font-bannerFont">
      <div className="bg-pink-800/70 h-full w-full  flex justify-center items-center text-center">
        <h1 className=" text-2xl md:text-4xl lg:text-6xl text-center text-white px-10  lg:px-56 xl:px-80">
          Safest & Most Secured Matrimony Site in Bangladesh
        </h1>
      </div>
    </div>
  );
}

export default Banner;
