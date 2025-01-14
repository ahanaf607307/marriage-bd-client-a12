import React from 'react'
import { Outlet } from 'react-router-dom'
import AppNavbar from './AppNavbar'

function Mainlayout() {
  return (
    <div>
     <div><AppNavbar/></div>
     <div className='pt-24'><Outlet/></div>
     {/* <div><Footer/></div> */}
    </div>
  )
}

export default Mainlayout
