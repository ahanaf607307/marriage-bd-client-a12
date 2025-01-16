import { useQuery } from '@tanstack/react-query'
import { Button, FloatingLabel, Label, Select } from 'flowbite-react'
import React from 'react'
import { useForm } from "react-hook-form"
import useAxiosPublic from '../../Hook/useAxiosPublic'
import AllBioDataCard from '../../Shared/AllBioDataCard'
import Title from '../../Shared/Title'

function Biodatas() {
const axiosPublic = useAxiosPublic()

const {data : biodatas = [] , refetch } = useQuery({
  queryKey : ['biodatas'],
  queryFn : async () => {
    const res =await axiosPublic.get('/biodatas')
    return res.data

  }
})


  const {
    register,
    handleSubmit,
    reset ,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    const minAge = data.minAge
    const maxAge = data.maxAge
    const genderType = data.genderType
    const division = data.division

    const bioDataInfo = {
      minAge ,
      maxAge,
      genderType ,
      division
    }
    console.log(bioDataInfo )
    refetch()
    reset()
  }

  return (
    <div className='max-w-7xl mx-auto px-5'>
   <Title heading={"Find Your Perfect Match"
} title={'Your journey to a beautiful relationship begins here'}/>

<div className='grid grid-cols-1 lg:grid-cols-12 gap-5'>
  <div className='lg:col-span-4 bg-pink-400 py-10 px-3 rounded-xl  '>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="grid grid-flow-col justify-stretch space-x-4">
        <FloatingLabel {...register("minAge")} name='minAge' variant="filled" type='number' label="Min age"  />
        <FloatingLabel {...register("maxAge")} name='maxAge' variant="filled" type='number' label="Max age"  />
      </div>
      <div className="mb-2 block mt-3">
        <Label htmlFor="countries" value="Select Type" className='text-white' />
      </div>
      <Select  {...register("genderType")} name='genderType'  id="countries" defaultValue="" required>
        <option  value="" disabled>Select Type</option>
        <option>Male</option>
        <option>Female</option>
      </Select>

      <div className=" block mt-4 mb-2">
        <Label htmlFor="countries" value="Select Division" className='text-white' />
      </div>
      <Select {...register("division")}  name='division' id="countries" defaultValue=""  required>
        <option value="" disabled>Select Division</option>
        <option>Dhaka</option>
        <option>Chattagram</option>
        <option>Rangpur</option>
        <option>Barisal</option>
        <option>Khulna</option>
        <option>Mymensingh</option>
        <option>Sylhet</option>
      </Select>
<Button type="submit" className='w-full mt-4 bg-pink-500 border-2 border-pink-300 '> Find </Button>
    </form>
  </div>
 <div className='lg:col-span-8 px-2'>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-7xl mx-auto">
  {
    biodatas.map(biodata => <AllBioDataCard key={biodata?._id} biodata={biodata}/> )
  }

  </div>
 </div>
</div>
    </div>
  )
}

export default Biodatas

// import { useQuery } from "@tanstack/react-query";
// import { Button, FloatingLabel, Label, Select } from "flowbite-react";
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import useAxiosPublic from "../../Hook/useAxiosPublic";
// import AllBioDataCard from "../../Shared/AllBioDataCard";
// import Title from "../../Shared/Title";

// function Biodatas() {
//   const axiosPublic = useAxiosPublic();
//   const [filters, setFilters] = useState({});

//   const { data: biodatas = [], refetch } = useQuery({
//     queryKey: ["biodatas", filters],
//     queryFn: async () => {
//       const params = new URLSearchParams(filters).toString();
//       const res = await axiosPublic.get(`/biodatas?${params}`);
//       console.log(res)
//       return res.data;
//     },
//     enabled: true,
//   });

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     const { minAge, maxAge, genderType, division } = data;
//     console.log(minAge, maxAge, genderType, division);
//     setFilters({
//       ...(parseInt(minAge && { minAge })),
//       ...(parseInt(maxAge && { maxAge })),
//       ...(genderType && { genderType }),
//       ...(division && { division }),
//     });

//     refetch();
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-5">
//       <Title
//         heading={"Find Your Perfect Match"}
//         title={"Your journey to a beautiful relationship begins here"}
//       />

//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
//         <div className="lg:col-span-4 bg-pink-400 py-10 px-3 rounded-xl">
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <div className="grid grid-flow-col justify-stretch space-x-4">
//               <FloatingLabel
//                 {...register("minAge")}
//                 name="minAge"
//                 variant="filled"
//                 type="number"
//                 label="Min age"
//               />
//               <FloatingLabel
//                 {...register("maxAge")}
//                 name="maxAge"
//                 variant="filled"
//                 type="number"
//                 label="Max age"
//               />
//             </div>
//             <div className="mb-2 block mt-3">
//               <Label
//                 htmlFor="countries"
//                 value="Select Type"
//                 className="text-white"
//               />
//             </div>
//             <Select
//               {...register("genderType")}
//               name="genderType"
//               id="countries"
//               required
//             >
//               <option value="">Select Gender</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//             </Select>

//             <div className="block mt-4 mb-2">
//               <Label
//                 htmlFor="countries"
//                 value="Select Division"
//                 className="text-white"
//               />
//             </div>
//             <Select
//               {...register("division")}
//               name="division"
//               id="countries"
//               required
//             >
//               <option value="">Select Division</option>
//               <option value="Dhaka">Dhaka</option>
//               <option value="Chattagram">Chattagram</option>
//               <option value="Rangpur">Rangpur</option>
//               <option value="Barisal">Barisal</option>
//               <option value="Khulna">Khulna</option>
//               <option value="Mymensingh">Mymensingh</option>
//               <option value="Sylhet">Sylhet</option>
//             </Select>
//             <Button
//               type="submit"
//               className="w-full mt-4 bg-pink-500 border-2 border-pink-300"
//             >
//               Find
//             </Button>
//           </form>
//         </div>
//         <div className="lg:col-span-8 px-2">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-7xl mx-auto">
//             {biodatas.map((biodata) => (
//               <AllBioDataCard key={biodata?._id} biodata={biodata} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Biodatas;
