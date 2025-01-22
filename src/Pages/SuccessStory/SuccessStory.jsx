import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Title from "../../Shared/Title";


import { Rating } from "@mui/material";
import '@smastrom/react-rating/style.css';
import { Select } from "flowbite-react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hook/useAxiosPublic";

function SuccessStory() {
 const [sortOrder, setSortOrder] = useState("Ascending");
  const axiosPublic = useAxiosPublic()
  const { data: success = [] } = useQuery({
    queryKey: ["success"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/successStory/home`);
      return res.data;
    },
  });
  const storiesWithDate = success.map((story) => ({
    ...story,
    dateOnly: new Date(story?.marriageDate).toISOString().split("T")[0],
  }));

  const sortedStory = storiesWithDate.sort((a, b) => {
    const dateA = new Date(a.dateOnly);
    const dateB = new Date(b.dateOnly);

    return sortOrder === "Ascending"
      ? dateA - dateB
      : dateB - dateA;
  });
 

  console.log("successStory------", success);
  return (
    <div className="max-w-7xl mx-auto ">
     <div className=" py-16 font-bannerFont px-2">
     <div>
        <Title
          heading={`Success Stories That Inspire`}
          title={`Every match is a new story of love, trust, and companionship. Here are some of the wonderful journeys made possible by MarriageBD.
`}
          paddingTitle={`56`}
        />
      </div>
 <div className="flex justify-between items-center my-5 px-6 ">
        <h1 className=" font-bannerFont">Sort by <span className="text-pink-500 font-semibold text-lg">"Marriage Date"</span> </h1>
        <Select
          defaultValue="Ascending"
          onChange={(e) => setSortOrder(e.target.value)} 
        >
          <option value="Ascending">Ascending</option>
          <option value="Descending">Descending</option>
        </Select>
      </div>
      <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-7 items-center justify-center md:gap-x-10 lg:gap-x-5 ">
        {/* cards */}
        {sortedStory?.map((suc) => (
          <Link
          to={`/successStoryDetails/${suc?._id}`}
            key={suc?._id}
            className=" relative flex flex-col  rounded-md bg-white"
          >
            <img className="w-full h-2/5 object-cover rounded-t-md" src={suc?.coupleImageLink} alt="" />
            <div className="px-3 py-5 flex-1 flex flex-col justify-between ">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
            <Rating name="half-rating-read" defaultValue={suc?.rating} precision={0.5} readOnly />
            </h5>
            <p className="bg-pink-600 absolute top-0 right-0 text-white/90 px-2 py-1 rounded-md font-bannerFont">
              {suc?.marriageDate.slice(0,10)}
            </p>
            <p className="font-normal text-gray-900 dark:text-gray-400">
             {suc?.storyDetails.slice(0,100)} ....
            </p>
            </div>
          </Link>
        ))}
      </div>
     </div>
    </div>
  );
}

export default SuccessStory;
