import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { useEffect } from 'react';
import { useState } from 'react';
import ReviewCard from './ReviewCard';
import useTitle from '../../hooks/useTitle';

const Checkout = () => {
    const { _id, title, price, img, description, facility } = useLoaderData();
    const { user } = useContext(AuthContext);
    useTitle('Service details - Delivery Service');
    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = user?.name || 'unregistered';
        const email = user?.email || 'unregistered';
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            customer: name,
            email,
            message
        }


        fetch('https://delivery-services-kappa.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('services-token')}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Order placed successfully')
                    form.reset();

                }
            })
            .catch(er => console.error(er));


    }
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://delivery-services-kappa.vercel.app/orders')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
            <div>
                <h2 className='text-3xl'>Details Of the Service: {title}</h2>
                <div className='block'>
                    <div>
                        <img className='h-64 mt-5 mb-10' src={img} alt="" />
                    </div>
                    <div className='ml-28 mb-28'>
                        <p> <span className='font-bold '>Description:</span> {description}</p>
                        <p> <span className='font-bold '>Price:</span> {price}</p>
                        <h2 className='font-bold mb-5 mt-5 text-2xl'>Facilities: </h2>
                        {

                            facility?.map(fac => <div>
                                <p className='font-bold '>{fac.name}</p>
                                <p>{fac.details}</p>
                            </div>)
                        }
                    </div>
                </div>
            </div>
            <div>
                <h2>All Reviews:</h2>
                {

                    reviews.filter(review => review.serviceName === title
                    ).map(rev => <ReviewCard
                        key={rev._id}
                        rev={rev}
                    ></ReviewCard>)

                }
            </div>
            <form onSubmit={handlePlaceOrder}>
                <h4 className="text-1xl">Add Your Review:</h4>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required></textarea>
                <input className='btn m-5' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Checkout;