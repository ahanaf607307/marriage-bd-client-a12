import { Button, FloatingLabel, Label, Select } from 'flowbite-react'
import React from 'react'
import { useForm } from "react-hook-form"
import AllBioDataCard from '../../Shared/AllBioDataCard'
import Title from '../../Shared/Title'

function Biodatas() {

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
      <Select {...register("genderType")} name='genderType'  id="countries" required>
        <option>Male</option>
        <option>Female</option>
      </Select>

      <div className=" block mt-4 mb-2">
        <Label htmlFor="countries" value="Select Division" className='text-white' />
      </div>
      <Select {...register("division")}  name='division' id="countries" required>
        <option>Dhaka</option>
        <option>Chattagra</option>
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
    <AllBioDataCard/>
    <AllBioDataCard/>
    <AllBioDataCard/>
    <AllBioDataCard/>
    <AllBioDataCard/>
    <AllBioDataCard/>
    <AllBioDataCard/>
    <AllBioDataCard/>
    <AllBioDataCard/>
    <AllBioDataCard/>
    <AllBioDataCard/>
    <AllBioDataCard/>
  </div>
 </div>
</div>
    </div>
  )
}

export default Biodatas
