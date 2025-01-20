import { createBrowserRouter } from "react-router-dom";
import AdminDashboard from "../Dashboard/Admin/AdminDashboard";
import ApprovedPremium from "../Dashboard/Admin/ApprovedPremium";
import ContactRequest from "../Dashboard/Admin/ContactRequest";
import ManageUser from "../Dashboard/Admin/ManageUser";
import Dashboard from "../Dashboard/Dashboard";
import CreateSuccessStory from "../Dashboard/User/CreateSuccessStory";
import EditBiodata from "../Dashboard/User/EditBiodata";
import FavouritesBiodata from "../Dashboard/User/FavouritesBiodata";
import MyContactRequest from "../Dashboard/User/MyContactRequest";
import ViewBiodata from "../Dashboard/User/ViewBiodata";
import AdminRoute from "../Firebase/AdminRoute/AdminRoute";
import Login from "../Firebase/Login/Login";
import PrivateRoute from "../Firebase/PrivateRoute/PrivateRoute";
import SignUp from "../Firebase/Signup/SignUp";
import Home from "../Home/Home";
import Mainlayout from "../Main/Mainlayout";
import AboutUs from "../Pages/AboutUs/AboutUs";
import BioDataDetails from "../Pages/Biodata/BioDataDetails";
import Biodatas from "../Pages/BioDataPage/BioDatas";
import Contact from "../Pages/Contact/Contact";
import Payment from "../Pages/Payment/Payment";
import ErrorPage from "../Error/ErrorPage";

const routes = createBrowserRouter([
  {errorElement:<ErrorPage/>,
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bioDataDetails/:id",
        element: (
          <PrivateRoute>
            {" "}
            <BioDataDetails />
          </PrivateRoute>
        ),
      },

      {
        path: "/bioDatas",
        element: <Biodatas />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/contactUs",
        element: <Contact />,
      },
      {
        path: "/payment/:id",
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      // admin Route -------------------
      {
        path: "/dashboard/adminDashboard",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/manageUser",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageUser />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/approvedPremium",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ApprovedPremium />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/contactRequest",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ContactRequest />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      // admin Routes ends -----------------------

      // normal user Route starts -----------------
      {
        path: "/dashboard/editBiodata",
        element:<PrivateRoute> <EditBiodata /></PrivateRoute>,
      },
      {
        path: "/dashboard/viewBiodata",
        element:<PrivateRoute> <ViewBiodata /></PrivateRoute>,
      },
      {
        path: "/dashboard/myContactRequest",
        element: <PrivateRoute><MyContactRequest /></PrivateRoute>,
      },
      {
        path: "/dashboard/favouritesBiodata",
        element: <PrivateRoute><FavouritesBiodata /></PrivateRoute>,
      },
      {
        path: "/dashboard/createSuccessStory",
        element: <PrivateRoute><CreateSuccessStory /></PrivateRoute>,
      },
    ],
  },
]);

export default routes;
