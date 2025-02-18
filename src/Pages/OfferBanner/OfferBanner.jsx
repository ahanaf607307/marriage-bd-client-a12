import { Button } from 'flowbite-react';
import React from 'react';

const OfferBanner = () => {
    return (
        <section  class="bg-pink-500 mt-20 text-white text-center py-16 px-4">
        <h6 class="text-lg font-semibold uppercase tracking-widest">Hot Offer</h6>
        <h2 class="text-4xl font-bold mt-2">
            Up to <span class="text-purple-800">70% off</span> - All Premium Contact Information
        </h2>
       <div>
       <Button to='/bioDatas' class="mt-5 bg-white text-blue-700 font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-pink-600 hover:text-white transition duration-200">
        Explore More
    </Button>
       </div>
    </section>
    
    );
};

export default OfferBanner;