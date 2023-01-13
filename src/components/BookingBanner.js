import React, { useState } from 'react';
import bookingBanner from '../assets/Banner/bookingTicket.jpg'
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

const BookingBanner = ({ selectedDate, setSelectedDate }) => {
    let footer = <p className='py-5'>Please pick a day..</p>;
    if (selectedDate) {
        footer = <p className='py-5'>You have picked: {format(selectedDate, 'PP')}.</p>;
    }

    return (
        <header>
            <div className="hero py-6 bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={bookingBanner} alt="Booking Banner" className="rounded-lg shadow-2xl lg:w-3/5" />
                    <div className='px-6'>
                        <DayPicker
                            // mode='range'
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            footer={footer}
                        />
                        {/* <p>You have selected date: {format(selectedDate, 'PP')}</p> */}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default BookingBanner;