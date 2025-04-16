import React from 'react';
import { MdOutlineSecurity } from "react-icons/md";
import { RiInboxArchiveFill } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";
import { Slide } from "react-awesome-reveal";

const WhyChooseUs = () => {
    return (

  
          <div>
            <section className="bg-white dark:bg-gray-900 py-20 ">
  <div className="max-w-6xl mx-auto text-center px-4">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">Why Choose <span className="text-pink-500">MarriageBD?</span></h2>
    <p className="text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
      A platform built with values, security, and trust. Here's what sets us apart:
    </p>
    <Slide direction="up"  >
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { icon: <MdOutlineSecurity />, title: 'Safe & Secure', desc: 'Your data is protected with top-notch encryption.' },
        { icon: <RiInboxArchiveFill />, title: 'Smart Matching', desc: 'Find partners who match your values and lifestyle.' },
        { icon: <TbWorld />, title: 'Cultural Connection', desc: 'Celebrate tradition while embracing modern love.' }
      ].map((item, index) => (
        <div key={index} className="p-6 bg-gray-50 dark:bg-gray-800 flex flex-col justify-center items-center rounded-xl shadow-md text-center">
          <div className="text-4xl mb-3 items-center">{item.icon}</div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{item.title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
        </div>
      ))}
    </div>
    </Slide>
  </div>
</section>
        </div>
     
        
    );
};

export default WhyChooseUs;