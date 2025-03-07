

import { useQuery } from "@tanstack/react-query";
import { Button, FloatingLabel, Label, Select } from "flowbite-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import Loading from "../../Loading/Loading";
import AllBioDataCard from "../../Shared/AllBioDataCard";
import Title from "../../Shared/Title";

function Biodatas() {
  const axiosPublic = useAxiosPublic();
  // const [match , setMatch] = useState(true)
  const [filters, setFilters] = useState({});

  const { data: biodatas = [], refetch ,isLoading } = useQuery({
    queryKey: ["biodatas", filters],
    queryFn: async () => {
      // const params = new URLSearchParams(filters).toString();
      const params = new URLSearchParams(filters).toString();
      console.log(params)
      const res = await axiosPublic.get(`/biodatas/filter?${params}`);
      console.log(res.data)
      return res.data;
    },
    enabled: true,
  });

  

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { minAge, maxAge, genderType, permanentDivision } = data;
    console.log('xxxxxxxx',minAge , maxAge , genderType , permanentDivision)

    setFilters({
      ...(minAge && { minAge: parseInt(minAge) }),
      ...(maxAge && { maxAge: parseInt(maxAge) }),
      ...(genderType && { genderType }),
      ...(permanentDivision && { permanentDivision }),
    });

    refetch();
  };

  if (isLoading) {
    return <Loading/>;
  }

  return (
    <div className="dark:bg-gray-900">
    <div className="max-w-7xl mx-auto md:px-5 py-10">
      <Title
        heading={"Find Your Perfect Match"}
        title={"Your journey to a beautiful relationship begins here"}
      />
  
      <div className="flex flex-col md:flex-row gap-5">
        {/* Left Sidebar - Fixed */}
        <div className="lg:w-1/3 bg-pink-400 dark:bg-gray-800 py-5 md:py-10 px-3 rounded-xl sticky top-20 md:top-28 lg:top-24 md:h-screen z-30">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-flow-col justify-stretch space-x-4">
              <FloatingLabel
                {...register("minAge", { required: true })}
                name="minAge"
                variant="filled"
                type="number"
                label="Min age"
              />
              <FloatingLabel
                {...register("maxAge", { required: true })}
                name="maxAge"
                variant="filled"
                type="number"
                label="Max age"
              />
            </div>
            <div className="mb-2 block mt-3">
              <Label
                htmlFor="countries"
                value="Select Type"
                className="text-white"
              />
            </div>
            <Select
              {...register("genderType", { required: true })}
              name="genderType"
              id="countries"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Select>
  
            <div className="block mt-4 mb-2">
              <Label
                htmlFor="countries"
                value="Select Division"
                className="text-white"
              />
            </div>
            <Select
              {...register("permanentDivision", { required: true })}
              name="permanentDivision"
              id="countries"
              required
            >
              <option value="">Select Division</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Chattagram">Chattagram</option>
              <option value="Rangpur">Rangpur</option>
              <option value="Barisal">Barisal</option>
              <option value="Khulna">Khulna</option>
              <option value="Mymensingh">Mymensingh</option>
              <option value="Sylhet">Sylhet</option>
            </Select>
            <Button
              type="submit"
              className="w-full mt-4 bg-pink-500 dark:bg-pink-600 border-2 border-pink-300"
            >
              Find
            </Button>
          </form>
        </div>
  
     
        <div className="lg:w-2/3 px-2">
          {biodatas.length === 0 ? (
            <h1 className="text-2xl font-semibold font-bannerFont text-center my-20 text-pink-500 md:px-44">
              No Data Match. Give Correct Data in Filter.
            </h1>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 max-w-7xl mx-auto">
              {biodatas.map((biodata) => (
                <AllBioDataCard key={biodata?._id} biodata={biodata} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default Biodatas;
