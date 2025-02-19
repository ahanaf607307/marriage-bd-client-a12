import { Flowbite } from 'flowbite-react'
import React from 'react'
import { Outlet } from 'react-router-dom'
import AppFooter from './AppFooter'
import AppNavbar from './AppNavbar'

function Mainlayout() {
  return (
    <div className=' '>
         <Flowbite>
            <div><AppNavbar/></div>
     <div className='pt-20 min-h-[calc(100vh-68px)]'><Outlet/></div>
     <div className=''><AppFooter/></div>
         </Flowbite>
   
    </div>
  )
}

export default Mainlayout
