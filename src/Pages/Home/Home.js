import React from 'react';
import Banner from './Banner/Banner';
import Info from './../Info';
import Services from './Services';
import ServiceHeroSection from './ServiceHeroSection';
import MakeAppointment from './MakeAppointment';
import Testimonial from './Testimonial';
import Contact from './Contact';
import Footer from './../Shared/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <ServiceHeroSection></ServiceHeroSection>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;