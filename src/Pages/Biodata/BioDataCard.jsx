
import { Button } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

function BioDataCard({premium }) {
  return (
  <>
 <div className='border font-bannerFont rounded-xl bg-white'>
<div className='bg-pink-400 flex flex-col justify-center items-center py-10 rounded-tl-full  relative '>
<img src={premium?.imageLink} className='min-w-32 max-w-32 max-h-32 min-h-32 my-2 rounded-full' alt="bio data image" />
<h1 className='text-lg text-white/90 bg-pink-600 pl-5 pr-1  pt-1 rounded-tl-3xl absolute bottom-0 right-0 '>BioData No : {premium?.biodataId}</h1>
<p className='absolute text-xl top-2 left-2 '>{premium?.genderType}</p>
</div>
<div className='px-10 py-4'>
    <h1 className='text-xl flex justify-between '><span>Division </span>  <span > {premium?.permanentDivision}</span></h1>
    <h1 className='text-xl flex justify-between '><span>Age </span>  <span > {premium?.age}</span></h1>
    <h1 className='text-xl flex justify-between  '><span>Occupation </span>  <span > {premium?.occupation}</span></h1>
    
     
</div>
<Link to={`/premiumDetails/${premium?._id}`}><Button className='w-10/12 mx-auto outline-none mb-7 hover:bg-gradient-to-r from-pink-300 to-pink-700 border-2 border-pink-500 text-pink-500 hover:text-white duration-100 hover:border-white bg-transparent'  >
View Profile 
</Button></Link>
</div>  


  </>
  )
}

export default BioDataCard
