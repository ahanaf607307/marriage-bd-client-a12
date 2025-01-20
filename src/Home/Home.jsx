import React from 'react'
import BioData from '../Pages/Biodata/BioData'
import HowItworks from '../Pages/HowItWork/HowItworks'
import SuccessCounterSection from '../Pages/SuccessCounterSection/SuccessCounterSection'
import Banner from './Banner'
import SuccessStory from '../Pages/SuccessStory/SuccessStory'

function Home() {
  return (
    <div>
  <Banner/>
  <BioData/>
  <HowItworks/>
  <SuccessCounterSection/>
  <SuccessStory/>
    </div>
  )
}

export default Home
