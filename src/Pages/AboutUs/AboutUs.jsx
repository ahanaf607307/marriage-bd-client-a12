import React from 'react'
import { Card } from "flowbite-react";
import { HiUserGroup, HiShieldCheck, HiHeart } from "react-icons/hi";
function AboutUs() {
  return (
  

    


 <>
 {/* <div className="  h-52 min-h-[calc(100vh-148px)]    font-bannerFont">
<div className='bg-pink-800/30 flex flex-col justify-center items-center text-center h-full'>
<div className=" max-w-7xl mx-auto  flex flex-col justify-center items-center text-center ">
  <h1 className=" text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white px-10  lg:px-32 xl:px-56">
  About us
  </h1>
  <h1 className="text-sm md:text-md mt-4 text-center text-white/80 px-10 ">
  Share your biodata with relevant details to help others get to know you better.
  </h1>
  <h1 className="text-sm md:text-md mt-4 text-center text-white/80 px-10 ">
  Welcome to MarriageBD, Bangladesh’s trusted platform for finding your perfect life partner. Our mission is to connect hearts and build beautiful relationships by bringing Bangladeshi individuals together in a safe, reliable, and user-friendly space. 
      At MarriageBD, we understand the importance of family values, culture, and tradition when choosing a life partner. That's why we provide a platform where users can share detailed biodata to showcase their personality, preferences, and background.
  </h1>
  <h1 className="text-sm md:text-md mt-4 text-center text-white/80 px-10 ">
  We are committed to providing a secure and transparent experience, ensuring your journey to find the right partner is smooth and meaningful.

Join MarriageBD today and take the first step towards your happily ever after. Together, let’s build a future full of love and harmony.
  </h1>
</div>
</div>
</div> */}
 
 <section className="min-h-[calc(100vh-148px)] bg-white dark:bg-black/90 font-bannerFont py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl  font-bannerFont text-gray-800 dark:text-white/90 mb-6">
          About Us
        </h2>
        {/* Subheading */}
        <p className="text-lg text-gray-600 dark:text-white/90 mb-10 max-w-3xl mx-auto">
          Share your biodata with relevant details to help others get to know you better.
        </p>

        {/* Description */}
        <Card className="bg-white dark:bg-gray-900  rounded-3xl text-left transition-all duration-300 hover:scale-[1.01]">
  <div className="space-y-6 p-6 md:p-10">
    
    {/* Intro Badge */}
    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700  px-4 py-1 rounded-full text-sm font-medium w-fit mb-3">
      💍 Trusted Matrimony in Bangladesh
    </div>

    {/* Paragraph 1 */}
    <p className="text-gray-700 text-base md:text-lg leading-relaxed dark:text-white">
      Welcome to <span className="font-bold text-blue-600">MarriageBD</span> — Bangladesh’s most <span className="text-pink-600 font-semibold">trusted</span> platform to discover your ideal life partner. Our mission is to <span className="font-semibold text-green-600">connect hearts</span> and build lasting relationships in a safe, caring, and culturally aligned space.
    </p>

    {/* Paragraph 2 */}
    <p className="text-gray-700 text-base md:text-lg leading-relaxed dark:text-white">
      At <span className="font-bold text-blue-600">MarriageBD</span>, we celebrate <span className="font-semibold text-purple-600">family values, culture, and tradition</span>. Our platform lets you showcase your unique personality and preferences through rich biodata — making it easier to find someone who truly resonates with you.
    </p>

    {/* Paragraph 3 */}
    <p className="text-gray-700 text-base md:text-lg leading-relaxed dark:text-white">
      We are committed to ensuring a <span className="font-semibold text-green-600">secure</span>, <span className="font-semibold text-indigo-600">transparent</span>, and <span className="font-semibold text-rose-600">meaningful</span> experience throughout your journey.
      <br />
      <br />
      <span className="text-blue-700 font-semibold text-lg block">
        Join <span className="text-pink-600 font-bold">MarriageBD</span> today — your forever could begin with just one click!
      </span>
    </p>
  </div>
</Card>


        {/* Highlights Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <Card className="hover:shadow-xl transition-shadow duration-200">
            <HiUserGroup className="text-4xl text-blue-500 mb-3 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Community Focused</h3>
            <p className="text-gray-600 text-sm mt-2 dark:text-white">
              Built for Bangladeshis who value culture and connections.
            </p>
          </Card>
          <Card className="hover:shadow-xl transition-shadow duration-200">
            <HiShieldCheck className="text-4xl text-green-500 mb-3 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Safe & Secure</h3>
            <p className="text-gray-600 text-sm mt-2 dark:text-white">
              Your privacy and safety are our top priority.
            </p>
          </Card>
          <Card className="hover:shadow-xl transition-shadow duration-200">
            <HiHeart className="text-4xl text-pink-500 mb-3 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Made with Love</h3>
            <p className="text-gray-600 text-sm mt-2 dark:text-white">
              Every match is made with care and heartfelt intention.
            </p>
          </Card>
        </div>
      </div>
    </section>

 </>
  )
}

export default AboutUs
