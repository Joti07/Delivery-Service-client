import React from 'react';
import Services from '../../Services/Services';
// import About from '../About/About';
import Banner from '../Banner/Banner';


const Home = () => {
    return (
        <div>
            Home
            <Banner></Banner>
            {/* <About></About> */}
            <Services></Services>
        </div>
    );
};

export default Home;