import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-2xl">
            <div className="card-body">
                <p className='text-justify'>{review.review}</p>
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-16	 rounded-full ring ring-secondary ring-offset-base-100 ">
                            <img src={review.img} alt='' />
                        </div>
                    </div>
                    <div className='ml-5 flex flex-col'>
                        <h2 className='font-bold text-[#3A4256]'>{review.name}</h2>
                        <p>{review.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;