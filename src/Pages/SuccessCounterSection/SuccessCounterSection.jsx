import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../Firebase/UseAuth/useAuth";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import Loading from "../../Loading/Loading";
import Title from "../../Shared/Title";
import { Slide } from "react-awesome-reveal";

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


     <Slide direction="up"  >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-12 lg:gap-8 items-center justify-center">
  {[
    {
      title: "Total Biodata",
      value: homeCount?.totalBiodata,
      color: "from-pink-500 to-rose-400",
    },
    {
      title: "Total Male",
      value: homeCount?.totalMale,
      color: "from-blue-500 to-indigo-400",
    },
    {
      title: "Total Female",
      value: homeCount?.totalFemale,
      color: "from-pink-400 to-fuchsia-500",
    },
    {
      title: "Completed Marriage",
      value: homeCount?.totalMarrige,
      color: "from-emerald-400 to-green-500",
    },
  ].map((item, index) => (
    <div
      key={index}
      className="relative w-56 h-72 rounded-xl flex flex-col items-center justify-center overflow-hidden shadow-xl"
    >
      <div className="absolute top-1 left-1 w-[215px] h-[265px] bg-white/90 backdrop-blur-[24px] rounded-xl border border-gray-200 z-10"></div>
      <div
        className={`absolute top-1/2 left-1/2 w-40 h-40 bg-gradient-to-br ${item.color} opacity-90 rounded-full blur-[14px] animate-blob`}
      ></div>
      <div className="z-20 text-center">
        <p className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500 drop-shadow-sm">
          {item.value}
        </p>
        <h2 className="uppercase mt-2 text-base font-semibold tracking-wide text-gray-700">
          {item.title}
        </h2>
      </div>
    </div>
  ))}
</div>
</Slide>
     
    </div>
          
    
  );
}

export default SuccessCounterSection;
