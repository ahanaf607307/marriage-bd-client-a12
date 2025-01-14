import React from 'react'
import { Outlet } from 'react-router-dom'
import AppFooter from './AppFooter'
import AppNavbar from './AppNavbar'

function Mainlayout() {
  return (
    <div>
     <div><AppNavbar/></div>
     <div className='pt-20'><Outlet/></div>
     <div><AppFooter/></div>
    </div>
  )
}

export default Mainlayout
