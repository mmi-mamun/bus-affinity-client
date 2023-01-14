import React from 'react';

const BookingOption = ({ bookingOption, setBookingSeat }) => {
    const { busName, destination, travelTime, rentalFee, seats } = bookingOption;
    return (
        <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
                <h2 className="uppercase text-center text-xl font-semibold">{destination}</h2>
                <h2 className="uppercase text-center text-md font-bold">{busName}</h2>
                <h2 className="uppercase text-center text-md">{travelTime}</h2>
                <p className='text-center text-lg'>Available {seats.length > 1 ? 'seats ' : 'seat '}:  {seats.length} </p>
                <div className="card-actions justify-center">
                    {/* <button className="btn btn-primary">Book Seat</button> */}
                    <label disabled={seats.length === 0} onClick={() => setBookingSeat(bookingOption)} htmlFor="booking-modal" className="btn btn-active btn-ghost">Book Seat</label>
                </div>
            </div>
        </div>
    );
};

export default BookingOption;