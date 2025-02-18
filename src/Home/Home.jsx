import React from "react";
import { Helmet } from "react-helmet-async";
import BioData from "../Pages/Biodata/BioData";
import HowItworks from "../Pages/HowItWork/HowItworks";
import NewsLatter from "../Pages/NewsLatter/NewsLatter";
import OfferBanner from "../Pages/OfferBanner/OfferBanner";
import SuccessCounterSection from "../Pages/SuccessCounterSection/SuccessCounterSection";
import SuccessStory from "../Pages/SuccessStory/SuccessStory";
import Banner from "./Banner";

function Home() {
  return (
    <div>
      <Helmet>
        <title>Home | marriageBd</title>
      </Helmet>
      <Banner />
      <BioData />
      <OfferBanner/>
      <HowItworks />
      <SuccessCounterSection />
      <SuccessStory />
      <NewsLatter />
    </div>
  );
}

export default Home;
