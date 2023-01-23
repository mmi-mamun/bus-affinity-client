import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaUserSecret, FaUserShield } from "react-icons/fa";

const AllUsers = () => {
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users`);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th>
                            <FaUserSecret className='w-6 h-6'></FaUserSecret>
                            {/* <label>
                                <input type="checkbox" className="checkbox" />
                            </label> */}
                        </th>
                        <th>User</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Promote</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <!-- row  --> */}
                    {
                        users.map((user, i) =>
                            <tr key={user._id}>
                                <th>{i + 1}
                                    {/* <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label> */}
                                </th>

                                <td>
                                    {
                                        user?.photoURL ?
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={user?.photoURL} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            :
                                            <FaUserShield className="mask w-12 h-12"></FaUserShield>
                                    }
                                </td>

                                <td>
                                    {user?.name}
                                </td>
                                <td>
                                    {user?.email}
                                </td>
                                <td><button className='btn btn-accent btn-ghost btn-outline btn-xs'>Make Admin</button></td>
                                <td><button className="btn btn-outline btn-error btn-ghost btn-xs">Delete User</button></td>
                                {/* <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th> */}
                            </tr>)
                    }

                </tbody>


            </table>
        </div>
    );
};

export default AllUsers;