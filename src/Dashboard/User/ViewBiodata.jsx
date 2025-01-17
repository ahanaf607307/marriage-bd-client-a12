import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../Firebase/UseAuth/useAuth";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import BioDataDetail from "../../Pages/Biodata/BioDataDetail";
import Title from "../../Shared/Title";

function ViewBiodata() {
   const { user , loading } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { data: bioData = [] } = useQuery({
    queryKey: ["bioData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/bioDatas/${user.email}`);
      return res.data;
    },
  });

  
 

  return (
    <div>
      <Title heading={`View Your Bio Data `} />
     
      {
        bioData.map(bio => <BioDataDetail key={bio?._id} bio={bio} />)
      }
    </div>
  );
}

export default ViewBiodata;
