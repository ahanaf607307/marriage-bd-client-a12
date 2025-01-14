import { createBrowserRouter } from "react-router-dom"
import Mainlayout from "../Main/Mainlayout"
import Home from "../Home/Home"


const routes = createBrowserRouter([
    {
        path : '/',
        element : <Mainlayout/>,
        children : [
            {
                path : '/',
                element : <Home/>
            }
        ]
    }
])

export default routes
