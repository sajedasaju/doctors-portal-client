import React from 'react';
import doctor from '../../assets/images/doctor.png'
import PrimaryBtn from './PrimaryBtn';
import appointmentBG from '../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointmentBG})`
        }} className='flex items-center mb-12 flex-col md:flex-row lg:flex-row xl:flex-row mt-10'>
            <div className='flex-1 	hidden md:block lg:block xl:block'>
                <img className='mt-[-160px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 mr-3'>
                <h3 className='text-xl font-bold text-secondary uppercase'>Appointment</h3>
                <h5 className='text-4xl text-white my-2'>Make an appointment Today</h5>
                <p className='text-white mb-10'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryBtn> Get Started</PrimaryBtn>
            </div>
        </section>
    );
};

export default MakeAppointment;