import { format } from 'date-fns';
import React from 'react';
import auth from './../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';


const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
    const { _id, name, slots } = treatment
    const [user, loading, error] = useAuthState(auth);


    const handleBooking = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const phone = event.target.phone.value;
        const formattedDate = format(date, 'PP')


        const booking = {
            treatmentId: _id,
            treatment: name,
            slot: slot,
            date: formattedDate,
            patient: user.email,
            patientName: user.displayName,
            phone: phone
        }
        fetch('https://gentle-anchorage-06325.herokuapp.com/booking', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    toast.success(`Appointment is set ,${formattedDate} at ${slot}`)
                }

                else {
                    toast.error(`Already have an Appointment on  ,${data.booking?.date} at ${data.booking?.slot}`)
                }
                refetch();
                //for close modal
                setTreatment(null)
            })



    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">

                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Booking For: {name}</h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-center justify-items-center	 items-center mt-2'>
                        <input type="text" value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" disabled />
                        <select name='slot' className="select select-bordered w-full max-w-xs">

                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}>{slot}</option>)
                            }

                        </select>
                        <input type="text" name='name' value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" disabled />
                        <input type="email" name='email' placeholder="Your Email" className="input input-bordered w-full max-w-xs" value={user?.email || ''} disabled />
                        <input type="number" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value='submit' className="btn btn-secondary input input-bordered w-full max-w-xs" />
                    </form>



                </div>
            </div>
        </div>
    );
};

export default BookingModal;