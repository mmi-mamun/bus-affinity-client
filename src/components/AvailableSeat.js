import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import LoadSpinner from '../shared/LoadSpinner';
import BookingModal from './BookingModal';
import BookingOption from './BookingOption';

const AvailableSeat = ({ selectedDate, setSelectedDate, footer }) => {
    const [bookingSeat, setBookingSeat] = useState(null);
    const date = format(selectedDate, 'PPPP');

    // const [bookingOptions, setBookingOptions] = useState([]);
    // useEffect(() => {
    //     fetch(`http://localhost:5000/bookingOptions`)
    //         .then(res => res.json())
    //         .then(data => setBookingOptions(data))
    // }, [])

    const { data: bookingOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['bookingOptions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookingOptions?date=${date}`);
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <LoadSpinner></LoadSpinner>
    }

    return (
        <section>
            <div className='my-16'>
                {
                    selectedDate ? <p className='text-3xl text-center font-semibold my-3'>Available seats on {format(selectedDate, 'PPPP')}</p> : <p className='uppercase text-3xl text-center font-semibold my-3'>Select Your Day</p>
                }
            </div>
            <div className='grid gap-6 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12 px-12'>
                {
                    bookingOptions.map(option => <BookingOption key={option.custom_id} bookingOption={option} setBookingSeat={setBookingSeat} selectedDate={selectedDate}></BookingOption>)
                }
            </div>
            {
                bookingSeat &&
                <BookingModal bookingSeat={bookingSeat} selectedDate={selectedDate} setBookingSeat={setBookingSeat} refetch={refetch}></BookingModal>
            }
        </section>
    );
};

export default AvailableSeat;