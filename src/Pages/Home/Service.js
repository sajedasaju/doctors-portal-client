import React from 'react';

const Service = ({ service }) => {
    const { img, descrption, name } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-2xl">
            <figure className="px-8 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" width='116px' height='115px' />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{descrption}</p>

            </div>
        </div>
    );
};

export default Service;