import { createBrowserRouter } from "react-router-dom";
import ImageUpload from "../components/ImageUpload";
import AddDriver from "../dashboardComponents/AddDriver";
import AddStaff from "../dashboardComponents/AddStaff";
import AllUsers from "../dashboardComponents/AllUsers";
import MyBookings from "../dashboardComponents/MyBookings";
import DashboardLayout from "../layouts/DashboardLayout";
import Main from "../layouts/Main";
import Bookings from "../pages/Bookings";
import DashBoard from "../pages/DashBoard";
import Home from "../pages/Home";
import Login from "../shared/Login";
import SignUp from "../shared/SignUp";
import AdminRoute from "./AdminRoute";
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
                path: '/image',
                element: <ImageUpload></ImageUpload>
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
            {
                path: '/dashboard/users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/add-driver',
                element: <AdminRoute><AddDriver></AddDriver></AdminRoute>
            },
            {
                path: '/dashboard/add-staff',
                element: <AdminRoute><AddStaff></AddStaff></AdminRoute>
            },
        ]
    }
])

export default router;