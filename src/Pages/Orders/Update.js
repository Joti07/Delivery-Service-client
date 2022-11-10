import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const Update = () => {
    const review = useLoaderData();
    const [updateReview, setupdateReview] = useState(review);
    useTitle('Update Review - Delivery Service');
    const handleUpdate = event => {
        event.preventDefault();
        fetch(`https://delivery-services-kappa.vercel.app/orders/${review._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('services-token')}`
            },
            body: JSON.stringify(updateReview)

        })
            .then(res => res.json())
            .then(data => { console.log(data) })
    }
    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newReview = { ...review }
        newReview[field] = value;
        setupdateReview(newReview);
    }

    return (
        <div>
            {/* <h2>{review.message}</h2> */}
            <form onSubmit={handleUpdate}>
                <h4 className="text-1xl m-5">Update Your Review:</h4>
                <textarea onChange={handleInputChange} name="message" className="textarea textarea-bordered h-24 w-full" defaultValue={review.message} ></textarea>
                <input className='btn m-5' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Update;