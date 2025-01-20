import { useQuery } from "@tanstack/react-query";
import { Card } from "flowbite-react";
import React, { useState } from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import Title from "../../Shared/Title";


import '@smastrom/react-rating/style.css'
import { Rating } from "@mui/material";

function SuccessStory() {

  const axiosSecure = useAxiosSecure();
  const { data: success = [] } = useQuery({
    queryKey: ["success"],
    queryFn: async () => {
      const res = await axiosSecure.get("/successStory/home");
      return res.data;
    },
  });

  console.log("successStory------", success);
  return (
    <div className="max-w-7xl mx-auto ">
      <div>
        <Title
          heading={`Success Stories That Inspire`}
          title={`Every match is a new story of love, trust, and companionship. Here are some of the wonderful journeys made possible by MarriageBD.
`}
          paddingTitle={`56`}
        />
      </div>
      <div className="grid gird-cols-1 lg:grid-cols-2 gap-y-7 items-center justify-center lg:gap-x-5 ">
        {/* cards */}
        {success?.map((suc) => (
          <Card
            key={suc?._id}
            className="max-w-md relative"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={suc?.coupleImageLink}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <Rating name="half-rating-read" defaultValue={suc?.rating} precision={0.5} readOnly />
            </h5>
            <p className="bg-pink-600 absolute top-0 right-0 text-white/90 px-2 py-1 rounded-md font-bannerFont">
              {suc?.marriageDate}
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
             {suc?.storyDetails}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default SuccessStory;
