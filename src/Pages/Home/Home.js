import React from 'react';
import Banner from './Banner/Banner';
import Info from './../Info';
import Services from './Services';
import ServiceHeroSection from './ServiceHeroSection';
import MakeAppointment from './MakeAppointment';
import Testimonial from './Testimonial';
import Contact from './Contact';

const Home = () => {
    return (
        <div className=' px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <ServiceHeroSection></ServiceHeroSection>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;