import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosPublic from '../../Hook/useAxiosPublic'
import AllBioDataCard from '../../Shared/AllBioDataCard'
import Title from '../../Shared/Title'

function BioData() {
const axiosPublic = useAxiosPublic()


const {data : biodatas = [] } = useQuery({
  queryKey : ['biodatas'],
  queryFn : async () => {
    const res =await axiosPublic.get('/biodatas-premium')
    return res.data

  }
})
  return (
    <div className='max-w-7xl mx-auto '>
        
       <section className='my-'>
       <Title heading={`Browse Profiles`} title={`Get started with marriageBD.com `} titleFont={`md`}/>
       </section>
       
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-10 px-5'>
       

{
    biodatas.map(biodata => <AllBioDataCard key={biodata?._id} biodata={biodata}/> )
  }
     
      </div>
    </div>
  )
}

export default BioData
