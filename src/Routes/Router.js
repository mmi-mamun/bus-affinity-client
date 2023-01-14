import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Bookings from "../pages/Bookings";
import DashBoard from "../pages/DashBoard";
import Home from "../pages/Home";
import Login from "../shared/Login";
import SignUp from "../shared/SignUp";
import PrivateRoute from "./PrivateRoute";

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
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/dashboard',
                element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>
            }
        ]
    }
])

export default router;