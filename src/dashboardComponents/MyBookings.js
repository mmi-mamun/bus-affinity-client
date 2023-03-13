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
        <div className="overflow-x-auto px-6 my-8">
            <h1 className="text-3xl font-semibold text-center my-4 uppercase">My Bookings</h1>
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th className='text-lg'><AiOutlineFieldNumber className='h-8 w-8'></AiOutlineFieldNumber></th>
                        <th className='text-lg'>Destination</th>
                        <th className='text-lg'><span className='mr-2'>Bus Name</span> (seats)</th>
                        <th className='text-lg'>Travel Time</th>
                        <th className='text-lg'>Journey Date</th>
                    </tr>
                </thead>
                <tbody>
                    {console.log('normal', bookings)}
                    {console.log('reverse', bookings.reverse())}
                    {
                        bookings.length &&
                        [...bookings]?.reverse()?.map((myBooking, i) =>
                            <tr key={myBooking?._id} className="hover">
                                <th>{i + 1}</th>
                                <td>{myBooking?.destination}</td>
                                <td className='flex gap-2'> <span>{myBooking.busName}</span> <span>({myBooking?.seats?.join(', ')})</span></td>
                                <td>{myBooking?.travelTime}</td>
                                <td>{myBooking?.bookingDate}</td>
                                {console.log(myBooking?.seats)}
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyBookings;