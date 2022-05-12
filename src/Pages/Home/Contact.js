import React from 'react';
import appointmentBG from '../../assets/images/appointment.png'

const Contact = () => {
    return (
        <div style={{
            background: `url(${appointmentBG})`
        }} className=' px-10 py-14 mb-20'>
            <div className='text-center mb-10'>
                <h3 className='text-sm font-bold text-secondary uppercase'>Contact Us</h3>
                <h1 className='text-3xl font-medium text-white'>Stay connected with us</h1>
            </div>
            <div className='grid grid-cols-1 justify-items-center gap-3'>
                <input type="email" placeholder="Email" className="input input-bordered input-md w-full max-w-xs bg-[#ffffff]"
                />
                <input type="text" placeholder="Subject" className="input input-bordered input-md w-full max-w-xs"
                />
                <textarea className="textarea textarea-bordered w-full max-w-xs" placeholder="Message"></textarea>
            </div>
        </div>
    );
};

export default Contact;