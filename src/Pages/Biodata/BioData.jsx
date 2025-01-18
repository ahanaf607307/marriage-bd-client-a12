import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosPublic from '../../Hook/useAxiosPublic'
import Title from '../../Shared/Title'
import BioDataCard from './BioDataCard'

function BioData() {
const axiosPublic = useAxiosPublic()


const {data : premiums = []  } = useQuery({
  queryKey : ['premiums'],
  queryFn : async () => {
    const res =await axiosPublic.get('/premiums/premiums-card')
    return res.data
  }
})


console.log(premiums)
  return (
    <div className='max-w-7xl mx-auto '>
        
       <section className='my-'>
       <Title heading={`Browse Profiles`} title={`Get started with marriageBD.com `} titleFont={`md`}/>
       </section>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-10 px-5'>
        {
          premiums.map(premium =>  <BioDataCard key={premium?._id}  premium={premium}/>)
        }
     
      </div>
    </div>
  )
}

export default BioData
