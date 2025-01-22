import { useQuery } from "@tanstack/react-query";
import { Rating } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import Title from "../../Shared/Title";
import { Helmet } from "react-helmet-async";

function SuccessStoryDetails() {
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  const { data: successDetails = [] } = useQuery({
    queryKey: ["successDetails"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/successStory/${id}`);
      return res.data;
    },
  });
  console.log(successDetails);

  return (
    <div className="max-w-7xl mx-auto my-10">
       <Helmet>
                    <title>Success Story Details | marriageBd</title>
                  </Helmet>
      <div className="my-10 px-2 md:px-24 lg:px-36">
        <Title heading={`A Beautiful Beginning ! Biodata Id -  ${successDetails?.partnerBiodataId} & ${successDetails?.
selfBiodataId
}`} title={`From First Match to Forever`} /> 
      </div>
      <div
        key={successDetails?._id}
        className=" relative grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 rounded-md bg-white"
      >
        <img
          className=" object-cover rounded-t-md"
          src={successDetails?.coupleImageLink}
          alt=""
        />
        <div className="px-3 py-5  ">
          <h5 className="text-2xl font-bold tracking-tight ">
            <Rating
              name="half-rating-read"
              defaultValue={successDetails?.rating}
              precision={0.5}
              readOnly
            />
           
          </h5>
          <p className="bg-pink-600 my-5 text-white/90 px-2 py-1 rounded-md font-bannerFont">
            {successDetails?.marriageDate?.slice(0, 10)}
          </p>
          <p className="font-normal text-gray-900 dark:text-gray-400">
            {successDetails?.storyDetails} 
          </p>
        </div>
      </div>
    </div>
  );
}

export default SuccessStoryDetails;
