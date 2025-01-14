import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import React from 'react';
import { NavLink } from "react-router-dom";
import logo from '../assets/logo/logo.png';


function AppNavbar() {
  return (
    <Navbar fluid rounded className="fixed top-0 w-full py-5  z-50 bg-pink-400">
  
    <NavLink to='/' className='flex items-center gap-x-2'>
      <img src={logo} className=" h-6 sm:h-9" alt="Flowbite React Logo" />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white font-logoFont">marriageBD</span>
    </NavLink>

    <div className="flex md:order-2">
      <Dropdown
        arrowIcon={false}
        inline
        label={
          <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
        }
      >
        <Dropdown.Header>
          <span className="block text-sm">Bonnie Green</span>
          <span className="block truncate text-sm font-medium">name@flowbite.com</span>
        </Dropdown.Header>
        <NavLink>Dashboard</NavLink>
        <Dropdown.Divider />
        <Button size="xs">Sign Out</Button>
      </Dropdown>
      <Navbar.Toggle />
    </div>
    <Navbar.Collapse className="md:flex items-center lg:gap-x-3">
     <NavLink to='/' className={({ isActive }) =>
            `block   ${isActive ? "text-blue-700" : "text-gray-700"}`
          }>Home</NavLink>
     <NavLink to='/bioData' className={({ isActive }) =>
            `block   ${isActive ? "text-blue-700" : "text-gray-700"}`
          }> Biodatas</NavLink>
     <NavLink to='/aboutUs' className={({ isActive }) =>
            `block   ${isActive ? "text-blue-700" : "text-gray-700"}`
          }>  About Us</NavLink>
     <NavLink to='/contactUs' className={({ isActive }) =>
            `block   ${isActive ? "text-blue-700" : "text-gray-700"}`
          }>Contact Us</NavLink>
     <NavLink to='/dashboard' className={({ isActive }) =>
            `block   ${isActive ? "text-blue-700" : "text-gray-700"}`
          }>Dashboard</NavLink>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default AppNavbar
