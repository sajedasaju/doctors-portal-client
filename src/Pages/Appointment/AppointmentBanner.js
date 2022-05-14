import React from 'react';
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import bgImage from '../../assets/images/bg.png'


const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div style={{
            background: `url(${bgImage})`,
            backgroundSize: "cover"
        }}
            className="hero min-h-screen  mt-0 ">
            <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl flex-1" alt='' />
                <div className='flex-1 shadow-2xl rounded-box'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}

                    />
                    <p className='text-center'>You picked {format(date, 'PP')}.</p>
                </div>

            </div>

        </div>
    );
};

export default AppointmentBanner;