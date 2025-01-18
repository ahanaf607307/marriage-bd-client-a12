import { createBrowserRouter } from "react-router-dom"
import AdminDashboard from "../Dashboard/Admin/AdminDashboard"
import ApprovedPremium from "../Dashboard/Admin/ApprovedPremium"
import ContactRequest from "../Dashboard/Admin/ContactRequest"
import ManageUser from "../Dashboard/Admin/ManageUser"
import Dashboard from "../Dashboard/Dashboard"
import EditBiodata from "../Dashboard/User/EditBiodata"
import FavouritesBiodata from "../Dashboard/User/FavouritesBiodata"
import MyContactRequest from "../Dashboard/User/MyContactRequest"
import ViewBiodata from "../Dashboard/User/ViewBiodata"
import Login from "../Firebase/Login/Login"
import PrivateRoute from "../Firebase/PrivateRoute/PrivateRoute"
import SignUp from "../Firebase/Signup/SignUp"
import Home from "../Home/Home"
import Mainlayout from "../Main/Mainlayout"
import AboutUs from "../Pages/AboutUs/AboutUs"
import BioDataDetails from "../Pages/Biodata/BioDataDetails"
import PremiumDetails from "../Pages/Biodata/PremiumDetails"
import Biodatas from "../Pages/BioDataPage/BioDatas"
import Contact from "../Pages/Contact/Contact"
import CheckOutPage from "../Pages/Payment/CheckOutForm"


const routes = createBrowserRouter([
    {
        path : '/',
        element : <Mainlayout/>,
        children : [
            {
                path : '/',
                element : <Home/>
            },
            {
                path : '/bioDataDetails/:id',
                element :<PrivateRoute> <BioDataDetails/></PrivateRoute>
            },
            {
                path : '/premiumDetails/:id',
                element :<PrivateRoute> <PremiumDetails/></PrivateRoute>
            },
            {
                path : '/bioDatas',
                element : <Biodatas/>
            },
            {
                path : '/aboutUs',
                element : <AboutUs/>
            },
            {
                path : '/contactUs',
                element : <Contact/>
            },
            {
                path : '/checkOutPage',
                element : <CheckOutPage/>
            },
        ]
    },
    {
        path : '/login',
        element : <Login/>
    },
    {
        path : '/signUp',
        element : <SignUp/>
    },
    {
path : 'dashboard' ,
element : <PrivateRoute><Dashboard/></PrivateRoute>,
children : [
    // admin Route -------------------
    {
        path : '/dashboard/adminDashboard',
        element : <AdminDashboard/>
    },
    {
        path : '/dashboard/manageUser',
        element : <ManageUser/>
    },
    {
        path : '/dashboard/approvedPremium',
        element : <ApprovedPremium/>
    },
    {
        path : '/dashboard/contactRequest',
        element : <ContactRequest/>
    },
    // admin Routes ends -----------------------

    // normal user Route starts -----------------
    {
        path : '/dashboard/editBiodata',
        element : <EditBiodata/>
    },
    {
        path : '/dashboard/viewBiodata',
        element : <ViewBiodata/>
    },
    {
        path : '/dashboard/myContactRequest',
        element : <MyContactRequest/>
    },
    {
        path : '/dashboard/favouritesBiodata',
        element : <FavouritesBiodata/>
    },
    
]
    },
])

export default routes
