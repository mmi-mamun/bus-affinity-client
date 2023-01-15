import { createBrowserRouter } from "react-router-dom";
import MyBookings from "../dashboardComponents/MyBookings";
import DashboardLayout from "../layouts/DashboardLayout";
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
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>
            },
            {
                path: '/dashboard/my-bookings',
                element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>
            },
        ]
    }
])

export default router;