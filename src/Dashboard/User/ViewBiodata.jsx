import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../Firebase/UseAuth/useAuth";
import BioDataDetail from "../../Pages/Biodata/BioDataDetail";
import Title from "../../Shared/Title";
import useAxiosSecure from "../../Hook/useAxiosSecure";

function ViewBiodata() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: bio = [] } = useQuery({
    queryKey: ["bio"],
    enabled: !!user?.email && !!localStorage.getItem(`access-token`),
    queryFn: async () => {
      const res = await axiosSecure.get(`/bioDatas/${user.email}`);
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
