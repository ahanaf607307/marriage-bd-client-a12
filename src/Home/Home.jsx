import React from 'react'
import BioData from '../Pages/Biodata/BioData'
import HowItworks from '../Pages/HowItWork/HowItworks'
import SuccessCounterSection from '../Pages/SuccessCounterSection/SuccessCounterSection'
import Banner from './Banner'
import SuccessStory from '../Pages/SuccessStory/SuccessStory'
import { Helmet } from 'react-helmet-async'

function Home() {
  return (
    <div>
       <Helmet>
                    <title>Home | marriageBd</title>
                  </Helmet>
  <Banner/>
  <BioData/>
  <HowItworks/>
  <SuccessCounterSection/>
  <SuccessStory/>
    </div>
  )
}

export default Home
