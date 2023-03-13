import React from 'react';

const BookingOption = ({ bookingOption, setBookingSeat, selectedDate }) => {
    const { busName, destination, travelTime, rentalFee, seats, remainingSeats } = bookingOption;
    return (
        <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
                <h2 className="uppercase text-center text-xl font-semibold">{destination}</h2>
                <h2 className="uppercase text-center text-md font-bold">{busName}</h2>
                <h2 className="uppercase text-center text-md">{travelTime}</h2>
                <p className='text-center text-lg'>Available {remainingSeats.length > 1 ? 'seats ' : 'seat '}:  {remainingSeats.length} </p>
                {
                    selectedDate ?
                        <div className="card-actions justify-center">
                            {/* <button className="btn btn-primary">Book Seat</button> */}
                            <label disabled={remainingSeats.length === 0} onClick={() => setBookingSeat(bookingOption)} htmlFor="booking-modal" className="btn btn-active btn-ghost">Book Seat</label>
                        </div>
                        :
                        <div className="card-actions justify-center">
                            <label disabled className="btn btn-active btn-ghost">Book Seat</label>
                        </div>
                }
            </div>
        </div>
    );
};

export default BookingOption;