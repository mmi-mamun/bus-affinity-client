import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { AiOutlineFieldNumber, IconName } from "react-icons/ai";

const MyBookings = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user?.email}`

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: { authorization: `barer ${localStorage.getItem('accessToken')}` }
            });
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className="overflow-x-auto px-6">
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th className='text-lg'><AiOutlineFieldNumber className='h-8 w-8'></AiOutlineFieldNumber></th>
                        <th className='text-lg'>Destination</th>
                        <th className='text-lg'><span className='mr-2'>Bus Name</span> (seat)</th>
                        <th className='text-lg'>Travel Time</th>
                        <th className='text-lg'>Journey Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings?.map((myBooking, i) =>
                            <tr key={myBooking?._id} className="hover">
                                <th>{i + 1}</th>
                                <td>{myBooking?.destination}</td>
                                <td className='flex gap-2'> <span>{myBooking.busName}</span> <span>({myBooking.seat})</span></td>
                                <td>{myBooking?.travelTime}</td>
                                <td>{myBooking?.bookingDate}</td>
                            </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyBookings;