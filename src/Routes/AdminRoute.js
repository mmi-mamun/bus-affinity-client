import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    const [isAdmin, isAdminLoading] = useAdmin(user?.email);

    if (loading || isAdminLoading) {
        return <div className=''>
            <div className="shadow rounded-md p-4 my-24 min-h-screen w-full mx-auto">
                <div className="animate-pulse flex space-x-4 p-12">
                    <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                    <div className="flex-1 space-y-6 py-1">
                        <div className="h-12 bg-slate-700 rounded"></div>
                        <div className="space-y-3">
                            <div className="grid grid-cols-3 gap-4 my-6">
                                <div className="h-28 bg-slate-700 rounded col-span-2"></div>
                                <div className="h-28 bg-slate-700 rounded col-span-1"></div>
                            </div>
                            <div className="h-12 bg-slate-700 rounded my-12"></div>
                            <div className="h-12 bg-slate-700 rounded my-12"></div>
                            <div className="grid grid-cols-3 gap-4 my-24">
                                <div className="h-28 bg-slate-700 rounded col-span-2"></div>
                                <div className="h-28 bg-slate-700 rounded col-span-1"></div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 my-24">
                                <div className="h-28 bg-slate-700 rounded col-span-1"></div>
                                <div className="h-28 bg-slate-700 rounded col-span-2"></div>
                            </div>
                            <div className="h-12 bg-slate-700 rounded my-12"></div>
                            <div className="h-12 bg-slate-700 rounded my-12"></div>
                            <div className="h-12 bg-slate-700 rounded my-12"></div>
                        </div>
                    </div>
                    <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                </div>
            </div>
        </div>
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;