import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Firebase/UseAuth/useAuth";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import BioDataDetail from "../../Pages/Biodata/BioDataDetail";
import Title from "../../Shared/Title";
import { Helmet } from "react-helmet-async";

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
       <Helmet>
                    <title>View Biodata | marriageBd</title>
                  </Helmet>
      <Title heading={`View Your Bio Data `} />

     
       {
        bio?  <BioDataDetail  bio={bio} /> : <h1 className="text-2xl font-semibold font-bannerFont text-center my-20 text-pink-500 md:px-44">No Data Added . Please Create Your Biodata . go to <Link className="text-purple-500 underline" to='/dashboard/editBiodata'>Create Biodata</Link> </h1>
       }
    
    </div>
  );
}

export default ViewBiodata;
