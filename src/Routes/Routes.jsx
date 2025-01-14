import { createBrowserRouter } from "react-router-dom"
import Home from "../Home/Home"
import Mainlayout from "../Main/Mainlayout"
import BioDataDetails from "../Pages/Biodata/BioDataDetails"


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
                path : '/bioDataDetails',
                element : <BioDataDetails/>
            },
        ]
    }
])

export default routes
