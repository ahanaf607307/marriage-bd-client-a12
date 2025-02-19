
import { Button } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

function AllBioDataCard({biodata}) {
  
 
  return (
    <div className='border  font-bannerFont rounded-md bg-white dark:bg-purple-300'>
        <div className='bg-pink-400 dark:bg-gray-500 flex flex-col justify-center items-center py-10  rounded-tl-full   relative '>
        <img src={biodata?.imageLink} className='min-w-32 max-w-32 max-h-32 min-h-32 my-2 rounded-full' alt="bio data image" />
        <h1 className='text-lg text-white/90 bg-pink-600 dark:bg-gray-400 pl-5 pr-1  pt-1 rounded-tl-3xl absolute bottom-0 right-0 '>BioData No : {biodata?.biodataId}</h1>
        <p className='absolute text-xl top-2 left-2 '>{biodata?.genderType}</p>
        </div>
        <div className='px-10 py-4'>
            <h1 className='text-xl flex justify-between '><span>Division </span>  <span > {biodata?.permanentDivision}</span></h1>
            <h1 className='text-xl flex justify-between '><span>Age </span>  <span > {biodata?.age}</span></h1>
            <h1 className='text-xl flex justify-between  '><span>Occupation </span>  <span > {biodata?.occupation}</span></h1>
            
             
        </div>
       <Link to={`/bioDataDetails/${biodata?._id}`}><Button className='w-10/12 mx-auto outline-none mb-7 hover:bg-gradient-to-r  from-pink-300 to-pink-700 border-2 border-pink-500 text-pink-500 hover:text-white duration-100 hover:border-white bg-transparent  dark:from-pink-300 dark:to-pink-700 dark:border-2 dark:border-pink-500 dark:text-pink-500 dark:hover:text-white dark:duration-100 dark:hover:border-white dark:bg-transparent'  >
        View Profile 
      </Button></Link>
    </div>
  )
}

export default AllBioDataCard
