import { format } from 'date-fns';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../contexts/AuthProvider';

const BookingModal = ({ bookingSeat, selectedDate, setBookingSeat, refetch }) => {
    // const { options, bookedSeats } = bookingSeat;
    const { busName, seats, destination, travelTime, bookedSeats, remainingSeats } = bookingSeat;
    const { user } = useContext(AuthContext);
    const [selectedSeats, setSelectedSeats] = useState([]);
    console.log(selectedSeats)

    const handleBooking = (event, seats) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const number = form.number.value;

        const booking = {
            name,
            email, contactNumber: number, bookingDate: date, destination, travelTime, busName, seats
        }

        // TODO: send data to the server
        // and once data is saved then close the modal
        // and display toast
        console.log(booking);

        fetch(`http://localhost:5000/bookings`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Booking confirmed');
                    setBookingSeat(null);
                    refetch();
                }
                else {
                    toast.error(data.message);
                    setBookingSeat(null);
                }

            })
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
                    <p className="py-4">You've been selected only one seat at a time. And you can booked maximum 2 seats from each bus per day. It's our business policy.</p>
                    <form onSubmit={(e) => handleBooking(e, selectedSeats)} className='grid gap-3 grid-cols-1'>
                        <input type="text" value={date} className="input input-bordered input-md w-full" required />

                        <input name='name' type="text" placeholder="Your name" className="input input-bordered input-md w-full" defaultValue={user?.displayName} required />
                        <input name='email' type="email" placeholder="Email address" className="input input-bordered input-md w-full" defaultValue={user?.email} required />
                        <input name='number' type="text" placeholder="Contact number" className="input input-bordered input-md w-full" required />
                        {/* <input name='' type="text" placeholder="Type here" className="input input-bordered input-md w-full" /> */}
                        <p class="seat cursor-pointer">{seats[0]}</p>
                        <div className="grid grid-cols-4 gap-2 text-center">
                            {
                                seats.map((seat, i) =>
                                    <label name='seat' className="cursor-pointer label flex justify-start">
                                        <input onChange={(e) => {
                                            // console.log(e.target.checked, seat)
                                            if (e.target.checked) {
                                                setSelectedSeats([...selectedSeats, seat].sort())
                                            }
                                            else {
                                                setSelectedSeats(selectedSeats.filter(s => s !== seat))
                                            }
                                        }} name='seat' type="checkbox" className="checkbox checkbox-secondary mr-4" key={i} disabled={(selectedSeats.length >= 4 && !selectedSeats.includes(seat)) || bookedSeats.includes(seat)} />
                                        <span className="label-text">{seat}</span>
                                    </label>

                                )
                            }
                        </div>
                        {/* <select name='seat' className="select select-bordered w-full">
                            {
                                seats.map((seat, i) => < option key={i} value={seat}> {seat}</option>)
                            } */}
                        {/* <option disabled selected>Who shot first?</option>
                            <option>Han Solo</option>
                            <option>Greedo</option> */}
                        {/* </select> */}
                        <input name='' className='btn btn-accent my-6 w-full max-w-xs mx-auto' type="submit" value="Confirm" />
                    </form>
                </div>
            </div>
        </>
    );
};
let allSeats = document.querySelectorAll(".selected__seats");
for (let i = 0; i < allSeats.length; i++) {
    allSeats[i].addEventListener("click", () => {
        if (allSeats[i].classList.contains("bg-white")) {
            allSeats[i].classList.remove("bg-white");
        } else {
            allSeats[i].classList.add("bg-white");
        }
    })
}
export default BookingModal;


