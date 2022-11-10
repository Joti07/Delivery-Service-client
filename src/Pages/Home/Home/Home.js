import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Services from '../../Services/Services';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Choose from '../Choose/Choose';


const Home = () => {
    useTitle('Home - Delivery Service');
    return (
        <div>

            <Banner></Banner>
            <About></About>
            <Choose></Choose>
            <Services></Services>
        </div>
    );
};

export default Home;