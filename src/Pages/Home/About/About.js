import React from 'react';
// import person from '../../../assets/images/about_us/person.jpg'
// import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative w-1/2'>
                    <img src="https://www.realmobiweb.com/blog/wp-content/uploads/2022/02/Food-Delivery-Names-Food-Delivery-Service-Names-Ideas.jpg" alt="" className="w-4/5 h-full rounded-lg shadow-2xl" />
                    {/* <img src="https://toppng.com/uploads/preview/international-courier-quote-parcel-service-11563036211iw6gignvps.png" alt="" className="absolute right-5 top-1/2 w-3/5 " /> */}
                </div>
                <div className='w-1/2'>
                    <p className="text-2xl font-bold text-orange-600">About Us</p>
                    <h1 className="my-5 text-5xl font-bold">
                        Reliable Deliveries <br />
                        Always Ontime. <br />
                        Everytime.</h1>
                    <p className="py-6">Established in 2022 Delivery Services BD is now one of the most reliable courier service in Bangladesh. We are now a delivery one-stop-shop providing same day delivery and next day delivery for any professional company throughout Bangladesh. </p>
                    <p className="py-6">Customer Focused: Delivering on client commitment is our top priority.
                        Honesty: To be transparent, open & straightforward in all our dealings. </p>
                    <button className="btn btn-primary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;