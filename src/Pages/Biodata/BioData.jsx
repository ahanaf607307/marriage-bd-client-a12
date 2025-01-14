import React from 'react'
import Title from '../../Shared/Title'
import BioDataCard from './BioDataCard'

function BioData() {
  return (
    <div className='max-w-7xl mx-auto '>
        
       <section className='my-'>
       <Title heading={`Browse Profiles`} title={`Get started in marriageBD.com `} titleFont={`md`}/>
       </section>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-10 px-5'>
      <BioDataCard/>
      <BioDataCard/>
      <BioDataCard/>
      <BioDataCard/>
      <BioDataCard/>
      <BioDataCard/>
      </div>
    </div>
  )
}

export default BioData
