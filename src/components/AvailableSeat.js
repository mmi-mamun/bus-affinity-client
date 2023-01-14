import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import BookingOption from './BookingOption';

const AvailableSeat = ({ selectedDate, setSelectedDate, footer }) => {
    const [bookingOptions, setBookingOptions] = useState([]);
    const [bookingSeat, setBookingSeat] = useState(null);
    useEffect(() => {
        fetch('bookingOptions.json')
            .then(res => res.json())
            .then(data => setBookingOptions(data))
    }, [])

    return (
        <section>
            <div className='my-16'>
                {
                    selectedDate ? <p className='text-3xl text-center font-semibold my-3'>Available seats on {format(selectedDate, 'PPPP')}</p> : <p className='uppercase text-3xl text-center font-semibold my-3'>Select Your Day</p>
                }
            </div>
            <div className='grid gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12 px-12'>
                {
                    bookingOptions.map(option => <BookingOption key={option.custom_id} bookingOption={option} setBookingSeat={setBookingSeat}></BookingOption>)
                }
            </div>
            {
                bookingSeat && <BookingModal bookingSeat={bookingSeat} selectedDate={selectedDate} setBookingSeat={setBookingSeat}></BookingModal>
            }
        </section>
    );
};

export default AvailableSeat;