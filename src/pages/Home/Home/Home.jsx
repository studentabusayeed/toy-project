import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Category from '../Category/Category';
import Testimonial from '../Testimonial/Testimonial';
import Sponsors from '../Sponsors/Sponsors';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
            <Testimonial></Testimonial>
            <Sponsors></Sponsors>
        </div>
    );
};

export default Home;