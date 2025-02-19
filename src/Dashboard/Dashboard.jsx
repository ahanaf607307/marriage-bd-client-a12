import { Drawer, Sidebar } from "flowbite-react";
import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { FiAlignLeft } from "react-icons/fi";
import {
  HiChartPie,
  HiClipboard,
  HiCollection,
  HiLogin,
  HiPencil,
  HiShoppingBag,
  HiUsers,
} from "react-icons/hi";
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
  console.log("isAdmin", isAdmin);
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);
  return (
    <div className="">
      <div className=" ">
        {/* dashboard link */}
        <div className=" fixed top-0 z-50 flex flex-col    ">
          <div className="flex py-3 md:pl-5 flex-col items-start justify-end">
            <button
              className="p-1 w-full rounded-tr-full rounded-br-full hover:scale-105 duration-150 "
              onClick={() => setIsOpen(true)}
            >
              <FiAlignLeft className="text-xl text-black/90 dark:text-white/90 md:text-2xl lg:text-3xl" />
            </button>
          </div>
          <Drawer open={isOpen} onClose={handleClose}>
            <Drawer.Header title="Dashboard" titleIcon={() => <></>} />
            <Link
              to="/"
              className="flex gap-x-2 items-center font-bold text-black/90 dark:text-white"
            >
              <FaHome /> Home
            </Link>
            <Drawer.Items>
              <Sidebar
                aria-label="Sidebar with multi-level dropdown example"
                className="[&>div]:bg-transparent [&>div]:p-0"
              >
                <div className="flex h-full flex-col justify-between py-2">
                  <div>
                    <Sidebar.Items>
                      {isAdmin ? (
                        <Sidebar.ItemGroup>
                          <Sidebar.Item icon={HiChartPie}>
                            <NavLink
                              to="/dashboard/adminDashboard"
                              className={({ isActive }) =>
                                isActive
                                  ? "text-white/90 font-semibold hover:scale-90 bg-pink-500 rounded-xl px-3 py-2 duration-100"
                                  : "text-black/90 dark:text-white font-bold hover:scale-105 duration-150"
                              }
                            >
                              Admin Dashboard
                            </NavLink>
                          </Sidebar.Item>
                          <Sidebar.Item icon={HiShoppingBag}>
                            <NavLink
                              to="/dashboard/manageUser"
                              className={({ isActive }) =>
                                isActive
                                  ? "text-white/90 font-semibold hover:scale-90 bg-pink-500 rounded-xl px-3 py-2 duration-100"
                                  : "text-black/90 dark:text-white font-bold hover:scale-105 duration-150 "
                              }
                            >
                              Manage Users
                            </NavLink>
                          </Sidebar.Item>
                          <Sidebar.Item icon={HiUsers}>
                            <NavLink
                              to="/dashboard/approvedPremium"
                              className={({ isActive }) =>
                                isActive
                                  ? "text-white/90 font-semibold hover:scale-90 bg-pink-500 rounded-xl px-3 py-2 duration-100"
                                  : "text-black/90 dark:text-white font-bold hover:scale-105 duration-150"
                              }
                            >
                              Approved Premium
                            </NavLink>
                          </Sidebar.Item>
                          <Sidebar.Item icon={HiLogin}>
                            <NavLink
                              to="/dashboard/contactRequest"
                              className={({ isActive }) =>
                                isActive
                                  ? "text-white/90 font-semibold hover:scale-90 bg-pink-500 rounded-xl px-3 py-2 duration-100"
                                  : "text-black/90 dark:text-white font-bold hover:scale-105 duration-150"
                              }
                            >
                              Approved Contact Request
                            </NavLink>
                          </Sidebar.Item>
                          <Sidebar.Item icon={HiLogin}>
                            <button
                              className="text-white/90  font-semibold hover:scale-90 bg-purple-500 dark:bg-purple-500 rounded-xl px-3 py-2 duration-100"
                              onClick={handleLogout}
                            >
                              Logout
                            </button>
                          </Sidebar.Item>
                        </Sidebar.ItemGroup>
                      ) : (
                        <Sidebar.ItemGroup>
                          <Sidebar.Item icon={HiPencil}>
                            <NavLink
                              to="/dashboard/profile"
                              className={({ isActive }) =>
                                isActive
                                  ? "text-white/90 font-semibold hover:scale-90 bg-pink-500 rounded-xl px-3 py-2 duration-100"
                                  : "text-black/90 dark:text-white font-bold hover:scale-105 duration-150"
                              }
                            >
                              Profile 
                            </NavLink>
                          </Sidebar.Item>
                          <Sidebar.Item icon={HiPencil}>
                            <NavLink
                              to="/dashboard/editBiodata"
                              className={({ isActive }) =>
                                isActive
                                  ? "text-white/90 font-semibold hover:scale-90 bg-pink-500 rounded-xl px-3 py-2 duration-100"
                                  : "text-black/90 dark:text-white font-bold hover:scale-105 duration-150"
                              }
                            >
                              Edit Biodata
                            </NavLink>
                          </Sidebar.Item>
                          <Sidebar.Item icon={HiClipboard}>
                            <NavLink
                              to="/dashboard/myContactRequest"
                              className={({ isActive }) =>
                                isActive
                                  ? "text-white/90 font-semibold hover:scale-90 bg-pink-500 rounded-xl px-3 py-2 duration-100"
                                  : "text-black/90 dark:text-white font-bold hover:scale-105 duration-150"
                              }
                            >
                              My Contact Request
                            </NavLink>
                          </Sidebar.Item>
                          <Sidebar.Item icon={HiCollection}>
                            <NavLink
                              to="/dashboard/viewBiodata"
                              className={({ isActive }) =>
                                isActive
                                  ? "text-white/90 font-semibold hover:scale-90 bg-pink-500 rounded-xl px-3 py-2 duration-100"
                                  : "text-black/90 dark:text-white font-bold hover:scale-105 duration-150"
                              }
                            >
                              View Biodata
                            </NavLink>
                          </Sidebar.Item>
                          <Sidebar.Item icon={HiChartPie}>
                            <NavLink
                              to="/dashboard/favouritesBiodata"
                              className={({ isActive }) =>
                                isActive
                                  ? "text-white/90 font-semibold hover:scale-90 bg-pink-500 rounded-xl px-3 py-2 duration-100"
                                  : "text-black/90 dark:text-white font-bold hover:scale-105 duration-150"
                              }
                            >
                              Favourites Biodata
                            </NavLink>
                          </Sidebar.Item>
                          <Sidebar.Item icon={HiShoppingBag}>
                            <NavLink
                              to="/dashboard/createSuccessStory"
                              className={({ isActive }) =>
                                isActive
                                  ? "text-white/90 font-semibold hover:scale-90 bg-pink-500 rounded-xl px-3 py-2 duration-100"
                                  : "text-black/90 dark:text-white font-bold hover:scale-105 duration-150"
                              }
                            >
                              Create Success Story
                            </NavLink>
                          </Sidebar.Item>
                          <Sidebar.Item icon={HiLogin}>
                            <button
                              className="text-white/90 font-semibold hover:scale-90 bg-purple-500 dark:bg-purple-500 rounded-xl px-3 py-2 duration-100"
                              onClick={handleLogout}
                            >
                              Logout
                            </button>
                          </Sidebar.Item>
                        </Sidebar.ItemGroup>
                      )}
                    </Sidebar.Items>
                  </div>
                </div>
              </Sidebar>
            </Drawer.Items>
          </Drawer>
        </div>
        {/* dashboard page dynamic */}
        <div className="col-span-10  w-full min-h-screen bg-pink-300 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
