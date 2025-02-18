import { Button, DarkThemeToggle, Dropdown, Navbar } from "flowbite-react";
import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import useAuth from "../Firebase/UseAuth/useAuth";
import useAdmin from "../Hook/useAdmin";

function AppNavbar() {
  const [isAdmin] = useAdmin();
  const navigate = useNavigate();

  const { user, logOutUser } = useAuth();
console.log(user?.photoURL)
  const handleLogout = () => {
    logOutUser().then((res) => {
      navigate("/login");
    });
  };
  return (

      <Navbar
      fluid
      rounded
      className="bg-pink-400 py-5  fixed top-0 w-full  z-50 "
    >
  
     <NavLink to="/" className="flex items-center gap-x-2">
        <img src={logo} className=" h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap md:text-xl font-semibold text-white/90 font-logoFont">
          marriageBD
        </span>
      </NavLink>

      <div className="flex md:order-2 ">
      <DarkThemeToggle className="mr-2" />
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <img
              alt="User img"
              refferrerPolicy="no-reffer"
              className="border-2 h-10 md:h-12 w-10 md:w-12 rounded-full mr-2"
              src={user?.photoURL}
              rounded
            />
          }
        >

          <Dropdown.Header>
            <span className="block text-sm">{user?.displayName}</span>
            <Dropdown.Divider />
            <span className="block truncate text-sm font-medium">
              {user ? user?.email : "no user available"}
            </span>
          </Dropdown.Header>
          <Dropdown.Divider />
          {user ? (
            <Button onClick={() => handleLogout()}>Logout</Button>
          ) : (
            <div className="flex justify-around items-center gap-2">
              <Link to="/login">
                <Button size="xs" className="">
                  Login
                </Button>
              </Link>
              <Link to="/signUp">
                <Button size="xs" className="">
                  Signup
                </Button>
              </Link>
            </div>
          )}
        </Dropdown>
       
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="md:flex items-center lg:gap-x-4 gap-y-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `block   ${
              isActive
                ? "text-white/90 border-2 border-pink-600 border-b-0 px-2 rounded-xl"
                : "text-white/90"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/bioDatas"
          className={({ isActive }) =>
            `block   ${
              isActive
                ? "text-white/90 border-2 border-pink-600 border-b-0 px-2 rounded-xl"
                : "text-white/90"
            }`
          }
        >
          {" "}
          Biodatas
        </NavLink>
        <NavLink
          to="/aboutUs"
          className={({ isActive }) =>
            `block   ${
              isActive
                ? "text-white/90 border-2 border-pink-600 border-b-0 px-2 rounded-xl"
                : "text-white/90"
            }`
          }
        >
          {" "}
          About Us
        </NavLink>
        <NavLink
          to="/contactUs"
          className={({ isActive }) =>
            `block   ${
              isActive
                ? "text-white/90 border-2 border-pink-600 border-b-0 px-2 rounded-xl"
                : "text-white/90"
            }`
          }
        >
          Contact Us
        </NavLink>
        <NavLink
          to="/showAllSuccessStory"
          className={({ isActive }) =>
            `block   ${
              isActive
                ? "text-white/90 border-2 border-pink-600 border-b-0 px-2 rounded-xl"
                : "text-white/90"
            }`
          }
        >
          All Success Story
        </NavLink>
        {user ? (
          isAdmin ? (
            <NavLink
              to="/dashboard/adminDashboard"
              className={({ isActive }) =>
                `block ${
                  isActive
                    ? "text-white/90 border-2 border-pink-600 border-b-0 px-2 rounded-xl"
                    : "text-white/90"
                }`
              }
            >
              Dashboard
            </NavLink>
          ) : (
            <NavLink
              to="/dashboard/editBiodata"
              className={({ isActive }) =>
                `block ${
                  isActive
                    ? "text-white/90 border-2 border-pink-600 border-b-0 px-2 rounded-xl"
                    : "text-white/90"
                }`
              }
            >
              Dashboard
            </NavLink>
          )
        ) : null}
      </Navbar.Collapse>
     
    </Navbar>

  );
}

export default AppNavbar;
