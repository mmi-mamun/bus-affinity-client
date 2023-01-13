import React from 'react';

const BookingOption = ({ bookingOption }) => {
    const { busName, destination, travelTime, rentalFee, seat } = bookingOption;
    return (
        <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
                <h2 className="uppercase text-center text-xl font-semibold">{destination}</h2>
                <h2 className="uppercase text-center text-md font-bold">{busName}</h2>
                <h2 className="uppercase text-center text-md">{travelTime}</h2>
                <p className='text-center text-lg'>Available {seat.length > 1 ? 'seats ' : 'seat '}:  {seat.length} </p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">Book Seat</button>
                </div>
            </div>
        </div>
    );
};

export default BookingOption;