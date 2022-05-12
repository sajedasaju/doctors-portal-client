import React from 'react';
import PrimaryBtn from './PrimaryBtn';
import treatment from '../../assets/images/treatment.png'

const ServiceHeroSection = () => {
    return (
        <div className="hero py-24 w-5/6 mx-auto">
            <div className="hero-content flex-col lg:flex-row gap-x-16	">
                <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-3xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                    <PrimaryBtn>Get Started</PrimaryBtn>
                </div>
            </div>
        </div>




    );
};

export default ServiceHeroSection;