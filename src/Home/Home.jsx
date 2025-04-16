import React from "react";
import { Helmet } from "react-helmet-async";
import BioData from "../Pages/Biodata/BioData";
import FindSpecial from "../Pages/FindSpecial/FindSpecial";
import HowItworks from "../Pages/HowItWork/HowItworks";
import NewsLatter from "../Pages/NewsLatter/NewsLatter";
import OfferBanner from "../Pages/OfferBanner/OfferBanner";
import SuccessCounterSection from "../Pages/SuccessCounterSection/SuccessCounterSection";
import SuccessStory from "../Pages/SuccessStory/SuccessStory";
import Banner from "./Banner";
import WhyChooseUs from "../Pages/WhyChooseUs/whyChooseUs";
import { Slide } from "react-awesome-reveal";

function Home() {
  return (
    <div className="dark:bg-gray-800 pb-16">
      <Helmet>
        <title>Home | marriageBd</title>
      </Helmet>
      <Banner />
      <BioData />
      <OfferBanner/>
      <HowItworks />
<WhyChooseUs/>
      <SuccessCounterSection />
   
 

      <FindSpecial/>


  
      <SuccessStory />
      <NewsLatter />
    </div>
  );
}

export default Home;
