import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import "./Services.css";
import ServiceCard from './ServiceCard';


const Services = () => {


    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://delivery-services-kappa.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handleSeeAll = event => {
        fetch('https://delivery-services-kappa.vercel.app/servicesall')
            .then(res => res.json())
            .then(data => setServices(data))


    }

    return (
        <div>
            <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className="text-5xl font-semibold mb-5">Our Service Area</h2>
                {/* <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p> */}
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='pagination'>

                {
                    <button className="selected" onClick={handleSeeAll} > SeeAll</button>

                    // <Link>See all</Link>
                }

            </div>
        </div>
    );
};

export default Services;