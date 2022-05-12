import React from 'react';
import Service from './Service';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            descrption: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: fluoride

        },
        {
            _id: 2,
            name: "Cavity Filling",
            descrption: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: cavity
        },
        {
            _id: 3,
            name: "Teeth Whitening",
            descrption: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: whitening
        }
    ]
    return (
        <div className='my-20  '>
            <div className='text-center mb-10'>
                <h3 className='text-sm font-bold text-secondary uppercase'>Our services</h3>
                <h1 className='text-3xl font-medium'>Services We Provide</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;