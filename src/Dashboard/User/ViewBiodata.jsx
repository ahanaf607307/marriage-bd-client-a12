import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../Firebase/UseAuth/useAuth";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import BioDataDetail from "../../Pages/Biodata/BioDataDetail";
import Title from "../../Shared/Title";

function ViewBiodata() {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { data: bio = [] } = useQuery({
    queryKey: ["bio"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/bioDatas/${user.email}`);
      return res.data;
    },
  });
console.log('view biodata' , bio)
  return (
    <div>
      <Title heading={`View Your Bio Data `} />

     
        <BioDataDetail  bio={bio} />
    
    </div>
  );
}

export default ViewBiodata;
