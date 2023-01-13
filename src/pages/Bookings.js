import { format } from 'date-fns';
import React, { useState } from 'react';
import AvailableSeat from '../components/AvailableSeat';
import BookingBanner from '../components/BookingBanner';

const Bookings = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div className=''>
            <BookingBanner selectedDate={selectedDate} setSelectedDate={setSelectedDate}></BookingBanner>
            <AvailableSeat selectedDate={selectedDate}></AvailableSeat>
        </div>
    );
};

export default Bookings;