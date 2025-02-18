import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Firebase/UseAuth/useAuth';

const FindSpecial = () => {
    const {user} = useAuth()
    return (
        <section  class="bg-banner animate-pulse mt-20 -mb-10 text-white text-center ">
       
       <div className='bg-pink-800/60 backdrop-blur-sm py-16 px-4'>
       <h2 class="text-4xl font-bold mt-2">
           Find Someone Special at <span class="text-purple-500 pb-1 bg-white px-2 rounded-xl">marriagebd.com</span> 
        </h2>
        <h6 class="text-md font-semibold  tracking-widest mt-4">Safe , Secure and Trusted Matrimony site in Bangladesh</h6>
       <div className='pt-7'>
       <Link to={`${user? '/bioDatas' : '/signUp'}`} class=" bg-white text-blue-700 font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-pink-600 hover:text-white transition duration-200">
       { user? 'See Biodata' : 'Register Free Now'}
    </Link>
       </div>
       </div>
    </section>
    );
};

export default FindSpecial;