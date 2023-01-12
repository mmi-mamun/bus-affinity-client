import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Bookings from "../pages/Bookings";
import Home from "../pages/Home";
import Login from "../shared/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/bookings',
                element: <Bookings></Bookings>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])

export default router;