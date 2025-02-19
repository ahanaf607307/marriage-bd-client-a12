import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../Firebase/UseAuth/useAuth";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import Loading from "../../Loading/Loading";
import Title from "../../Shared/Title";

function SuccessCounterSection() {
  const axiosPublic = useAxiosPublic();
  const {user} = useAuth()
  const { data: homeCount = [], isLoading } = useQuery({
    queryKey: ["homeCount"],
    queryFn: async () => {
      const res = await axiosPublic.get("/biodatas/user");
      return res.data;
    },
  });

  if (isLoading) {
    return <Loading/>;
  }

  console.log(homeCount);

  return (
    <div className="font-bannerFont flex flex-col justify-center items-center max-w-7xl mx-auto">
     <div className="px-5">
     <Title
        heading={`Our Success at a Glance`}
        title={`MarriageBD – Building relationships, one success story at a time!`}
      />

     </div>
        {/* total biodata */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-12 lg:gap-8 items-center justify-center ">
          {/* cards starts */}
          <div class="relative w-52 h-64 rounded-lg flex flex-col items-center justify-center  overflow-hidden">
            <div class="absolute top-1 left-1 w-[190px] h-[240px] bg-white/95 backdrop-blur-[24px] rounded-lg border-2 border-white z-10"></div>
            <div class="absolute top-1/2 left-1/2 w-36 h-36 bg-red-500 opacity-100 rounded-full blur-[12px] animate-blob"></div>
            <div class="z-20 text-center">
              <p class="text-6xl font-semibold text-pink-500">
                {homeCount?.totalBiodata}
              </p>
              <h2 class="text-lg font-bold text-gray-700">Total Biodata</h2>
            </div>
          </div>

          <div class="relative w-52 h-64 rounded-lg flex flex-col items-center justify-center  overflow-hidden">
            <div class="absolute top-1 left-1 w-[190px] h-[240px] bg-white/95 backdrop-blur-[24px] rounded-lg border-2 border-white z-10"></div>
            <div class="absolute top-1/2 left-1/2 w-36 h-36 bg-red-500 opacity-100 rounded-full blur-[12px] animate-blob"></div>
            <div class="z-20 text-center">
              <p class="text-6xl font-semibold text-pink-500">
                {homeCount?.totalMale}
              </p>
              <h2 class="text-lg font-bold text-gray-700">Total Male</h2>
            </div>
          </div>

          <div class="relative w-52 h-64 rounded-lg flex flex-col items-center justify-center  overflow-hidden">
            <div class="absolute top-1 left-1 w-[190px] h-[240px] bg-white/95 backdrop-blur-[24px] rounded-lg border-2 border-white z-10"></div>
            <div class="absolute top-1/2 left-1/2 w-36 h-36 bg-red-500 opacity-100 rounded-full blur-[12px] animate-blob"></div>
            <div class="z-20 text-center">
              <p class="text-6xl font-semibold text-pink-500">
                {homeCount?.totalFemale}
              </p>
              <h2 class="text-lg font-bold text-gray-700">Total Female</h2>
            </div>
          </div>

          <div class="relative w-52 h-64 rounded-lg flex flex-col items-center justify-center  overflow-hidden">
            <div class="absolute top-1 left-1 w-[190px] h-[240px] bg-white/95 backdrop-blur-[24px] rounded-lg border-2 border-white z-10"></div>
            <div class="absolute top-1/2 left-1/2 w-36 h-36 bg-red-500 opacity-100 rounded-full blur-[12px] animate-blob"></div>
            <div class="z-20 text-center">
              <p class="text-6xl font-semibold text-pink-500">
                {homeCount?.totalMarrige}
              </p>
              <h2 class="text-lg font-bold text-gray-700">completed Marriage</h2>
            </div>
          </div>

          {/* cards ends */}
        </div>
     
    </div>
  );
}

export default SuccessCounterSection;
