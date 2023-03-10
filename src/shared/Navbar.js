import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/icons/logo.png'
import { AuthContext } from '../contexts/AuthProvider';
import { AiOutlineDashboard } from "react-icons/ai";
import { CgMenuRound } from "react-icons/cg";

const Navbar = () => {
    const { user, signingOut } = useContext(AuthContext);
    const handleLogOut = () => {
        signingOut()
            .then(() => {
                console.log("Logout done!")
            })
            .catch(err => console.log(err))
    }
    const menuItems = <>
        <li><Link className="text-lg font-semibold uppercase" to="/">Home</Link></li>
        <li><Link className="text-lg font-semibold uppercase" to="/bookings">Booking</Link></li>
        <li><Link className="text-lg font-semibold uppercase" to="/">Contact Us</Link></li>
        <li><Link className="text-lg font-semibold uppercase" to="/dashboard">Dashboard</Link></li>
        {/* <li><Link className="text-lg font-semibold uppercase" to="/image">Image</Link></li> */}
        {
            user?.uid ? <li><button className="text-lg font-semibold uppercase" onClick={handleLogOut}>Logout</button></li> : <li><Link className="text-lg font-semibold uppercase" to="/login">Login</Link></li>
        }
    </>
    return (
        <div className="navbar bg-base-100 px-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        {/* <CgMenuRound className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"></CgMenuRound> */}
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <img className=' w-32' src={logo} alt="" />
                {/* <a className="btn btn-ghost normal-case text-xl">Bus Affinity</a> */}
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost mr-3 lowercase">
                    {user?.displayName}
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> */}
                </button>
                {/* <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span className="badge badge-xs badge-primary indicator-item">{user?.password}</span>
                    </div>
                </button> */}
                <label htmlFor="dashboard-drawer" tabIndex={0} className="btn btn-ghost btn-circle lg:hidden">
                    <AiOutlineDashboard className="h-12 w-12"></AiOutlineDashboard>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg> */}
                </label>
            </div>
        </div>
    );
};

export default Navbar;