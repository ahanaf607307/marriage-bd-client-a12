import { Button } from "flowbite-react";
import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAuth from "../Firebase/UseAuth/useAuth";
import useAdmin from "../Hook/useAdmin";

function Dashboard() {
  const { logOutUser } = useAuth();
  const handleLogout = () => {
    logOutUser().then(() => {
      console.log("logout From Dashboard --->");
    });
  };

  const [isAdmin] = useAdmin();
  return (
    <div className="">
      <div className="grid gird-cols-1 md:grid-cols-12 ">
        {/* dashboard link */}
        <div className="md:col-span-3 bg-pink-400 flex flex-col gap-y-5 md:min-h-screen py-10 px-2 ">
          <Link
            to="/"
            className=" font-bold text-black"
          >
            Home
          </Link>
          {
            isAdmin ? <>
            <NavLink
            to="/dashboard/adminDashboard"
            className={({ isActive }) =>
              isActive ? "text-black   bg-pink-600" : "text-black font-bold "
            }
          >
            Admin Dashboard
          </NavLink>

          <NavLink
            to="/dashboard/manageUser"
            className={({ isActive }) =>
              isActive ? "text-black   bg-pink-600" : "text-black font-bold "
            }
          >
            Manage Users
          </NavLink>

          <NavLink
            to="/dashboard/approvedPremium"
            className={({ isActive }) =>
              isActive ? "text-black   bg-pink-600" : "text-black font-bold "
            }
          >
            Approved Premium
          </NavLink>

          <NavLink
            to="/dashboard/contactRequest"
            className={({ isActive }) =>
              isActive ? "text-black   bg-pink-600" : "text-black font-bold "
            }
          >
            Approved Contact Request
          </NavLink>
            </> : <>
            <NavLink
            to="/dashboard/editBiodata"
            className={({ isActive }) =>
              isActive ? "text-black   bg-pink-600" : "text-black font-bold "
            }
          >
            Edit Biodata
          </NavLink>
          <NavLink
            to="/dashboard/viewBiodata"
            className={({ isActive }) =>
              isActive ? "text-black   bg-pink-600" : "text-black font-bold "
            }
          >
         View Biodata
          </NavLink>
          <NavLink
            to="/dashboard/myContactRequest"
            className={({ isActive }) =>
              isActive ? "text-black   bg-pink-600" : "text-black font-bold "
            }
          >
         My Contact Request
          </NavLink>
          <NavLink
            to="/dashboard/favouritesBiodata"
            className={({ isActive }) =>
              isActive ? "text-black   bg-pink-600" : "text-black font-bold "
            }
          >
         Favourites Biodata
          </NavLink>
            
            </>
          }
          

          <Button className="" onClick={handleLogout}>
            Logout
          </Button>
        </div>
        {/* dashboard page dynamic */}
        <div className="md:col-span-9  bg-pink-300 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
