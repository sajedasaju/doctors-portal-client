import React from 'react';
import PrimaryBtn from './../Home/PrimaryBtn';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body items-center">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>
                    {slots.length ? <span>
                        {slots[0]}
                    </span>
                        :
                        <span className='text-red-500 text-xs font-bold'>No Slots Available</span>
                    }
                </p>

                <p>
                    {slots.length} {slots.length > 1 ? 'spaces' : 'space'} available
                </p>
                <div className="card-actions justify-center">


                    <label
                        htmlFor="booking-modal"
                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0}
                        className="btn btn-sm btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;