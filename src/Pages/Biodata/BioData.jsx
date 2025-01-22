import { useQuery } from "@tanstack/react-query";
import { Select } from "flowbite-react";
import React, { useState } from "react";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import AllBioDataCard from "../../Shared/AllBioDataCard";
import Title from "../../Shared/Title";

function BioData() {
  const axiosPublic = useAxiosPublic();
  const [sortOrder, setSortOrder] = useState("Ascending");
  const { data: biodatas = [] } = useQuery({
    queryKey: ["biodatas"],
    queryFn: async () => {
      const res = await axiosPublic.get("/biodatas-premium");
      return res.data;
    },
  });

   
    const sortedBiodatas = [...biodatas].sort((a, b) => {
      if (sortOrder === "Ascending") {
        return a.age - b.age; // Ascending order
      } else {
        return b.age - a.age; // Descending order
      }
    });
  return (
    <div className="max-w-7xl mx-auto ">
      <section className="my-">
        <Title
          heading={`Browse Premium Profiles`}
          title={`Get started with marriageBD.com `}
          titleFont={`md`}
        />
      </section>
      <div className="flex justify-between items-center my-5 px-6 ">
        <h1 className=" font-bannerFont">Sort by <span className="text-pink-500 font-semibold text-lg">"Age"</span> </h1>
        <Select
          defaultValue="Ascending"
          onChange={(e) => setSortOrder(e.target.value)} 
        >
          <option value="Ascending">Ascending</option>
          <option value="Descending">Descending</option>
        </Select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-10 px-5">
        {sortedBiodatas.map((biodata) => (
          <AllBioDataCard key={biodata?._id} biodata={biodata} />
        ))}
      </div>
    </div>
  );
}

export default BioData;
