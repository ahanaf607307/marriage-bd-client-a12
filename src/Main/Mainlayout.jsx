import React from 'react'
import { Outlet } from 'react-router-dom'
import AppFooter from './AppFooter'
import AppNavbar from './AppNavbar'

function Mainlayout() {
  return (
    <div className=' '>
     <div><AppNavbar/></div>
     <div className='pt-20 min-h-[calc(100vh-68px)]'><Outlet/></div>
     <div><AppFooter/></div>
    </div>
  )
}

export default Mainlayout
