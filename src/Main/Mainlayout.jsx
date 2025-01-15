import React from 'react'
import { Outlet } from 'react-router-dom'
import AppFooter from './AppFooter'
import AppNavbar from './AppNavbar'

function Mainlayout() {
  return (
    <div className='bg-pink-50 flex flex-col min-h-screen'>
     <div><AppNavbar/></div>
     <div className='pt-20 flex-1'><Outlet/></div>
     <div><AppFooter/></div>
    </div>
  )
}

export default Mainlayout
