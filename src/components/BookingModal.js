import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ bookingSeat, selectedDate, setBookingSeat }) => {
    const { busName, seats } = bookingSeat;

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const number = form.number.value;
        const seat = form.seat.value;

        const booking = {
            bookingDate: date,
            name,
            seat, email, number
        }

        // TODO: send data to the server
        // and once data is saved then close the modal
        // and display toast
        console.log(booking);
        setBookingSeat(null);
    }

    const date = format(selectedDate, 'PPPP')
    return (
        <>
            {/* The button to open modal */}
            {/* <label htmlFor="booking-modal" className="btn">open modal</label> */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{busName}</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <form onSubmit={handleBooking} className='grid gap-3 grid-cols-1'>
                        <input type="text" value={date} className="input input-bordered input-md w-full" />
                        <select name='seat' className="select select-bordered w-full">
                            {
                                seats.map((seat, i) => < option key={i} value={seat}> {seat}</option>)
                            }
                            {/* <option disabled selected>Who shot first?</option>
                            <option>Han Solo</option>
                            <option>Greedo</option> */}
                        </select>
                        <input name='name' type="text" placeholder="Your name" className="input input-bordered input-md w-full" />
                        <input name='email' type="email" placeholder="Email address" className="input input-bordered input-md w-full" />
                        <input name='number' type="number" placeholder="Contact number" className="input input-bordered input-md w-full" />
                        <input name='' type="text" placeholder="Type here" className="input input-bordered input-md w-full" />
                        <input name='' className='btn btn-accent my-6 w-full max-w-xs mx-auto' type="submit" value="Confirm" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;