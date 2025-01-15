import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import React from 'react';
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo/logo.png';
import useAuth from "../Firebase/UseAuth/useAuth";
import useAdmin from "../Hook/useAdmin";


function AppNavbar() {

  const [isAdmin] = useAdmin()

  const {user, logOutUser} = useAuth()

  const handleLogout = () => {
    logOutUser()
    .then(res => {
      console.log('user Logged Out --> ',res.user)
    })
  }
  return (
    <Navbar fluid rounded className="fixed top-0 w-full py-5  z-50 bg-pink-400 px-5">
  
    <NavLink to='/' className='flex items-center gap-x-2'>
      <img src={logo} className=" h-6 sm:h-9" alt="Flowbite React Logo" />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white font-logoFont">marriageBD</span>
    </NavLink>

    <div className="flex md:order-2 ">
      <Dropdown

        arrowIcon={false}
        inline
        label={
          <Avatar alt="User settings" className="border-2 rounded-full mr-2" img={user?.photoURL} rounded />
        }
      >
        <Dropdown.Header>
          <span className="block text-sm">{user?.displayName}</span>
          <Dropdown.Divider />
          <span className="block truncate text-sm font-medium">{user ? user?.email : 'no user available'}</span>
        </Dropdown.Header>
        <Dropdown.Divider />
        {
          user ? <Button onClick={handleLogout}>Logout</Button> : <div className="flex justify-around items-center gap-2">
          <Link to='/login'><Button size="xs" className="">Login</Button></Link>
          <Link to='/signUp'><Button size="xs" className="">Signup</Button></Link>
          </div>
        }
      </Dropdown>
      <Navbar.Toggle />
    </div>
    <Navbar.Collapse className="md:flex items-center lg:gap-x-3">
     <NavLink to='/' className={({ isActive }) =>
            `block   ${isActive ? "text-blue-700" : "text-gray-700"}`
          }>Home</NavLink>
     <NavLink to='/bioDatas' className={({ isActive }) =>
            `block   ${isActive ? "text-blue-700" : "text-gray-700"}`
          }> Biodatas</NavLink>
     <NavLink to='/aboutUs' className={({ isActive }) =>
            `block   ${isActive ? "text-blue-700" : "text-gray-700"}`
          }>  About Us</NavLink>
     <NavLink to='/contactUs' className={({ isActive }) =>
            `block   ${isActive ? "text-blue-700" : "text-gray-700"}`
          }>Contact Us</NavLink>
    {user ? (
  isAdmin ? (
    <NavLink
      to="/dashboard/adminDashboard"
      className={({ isActive }) =>
        `block ${isActive ? "text-blue-700" : "text-gray-700"}`
      }
    >
      Dashboard
    </NavLink>
  ) : (
    <NavLink
      to="/dashboard/editBiodata"
      className={({ isActive }) =>
        `block ${isActive ? "text-blue-700" : "text-gray-700"}`
      }
    >
      Dashboard
    </NavLink>
  )
) : null}

    </Navbar.Collapse>
  </Navbar>
  )
}

export default AppNavbar
