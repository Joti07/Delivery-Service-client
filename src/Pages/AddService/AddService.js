import React, { useState } from 'react';
import useTitle from '../../hooks/useTitle';

const AddService = () => {

    const [service, setService] = useState();

    useTitle('Add service - Delivery Service');

    const handleUpdate = event => {
        event.preventDefault();
        fetch('https://delivery-services-kappa.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(service)

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('service added Successfully ');
                    event.target.reset();
                }
            })
    }
    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newReview = { ...service }
        newReview[field] = value;
        setService(newReview);
    }
    return (
        <div>
            <h2 className='text-center text-2xl m-5 '>Add Your Service:</h2>

            <div class="bg-blue-200 min-h-screen flex items-center">
                <div class="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
                    <form onSubmit={handleUpdate}>

                        <div class="flex items-center mb-5">
                            <label for="name" class="w-20 inline-block text-right mr-4 text-gray-500 text-gray-500"> Name</label>
                            <input onChange={handleInputChange} name="title" id="name" type="text" placeholder="Service Name" class="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-blue-400" />
                        </div>

                        <div class="flex items-center mb-10">
                            <label for="twitter" class="w-20 inline-block text-right mr-4 text-gray-500 text-gray-500">Price</label>
                            <input onChange={handleInputChange} type="text" name="price" id="twitter" placeholder="Service Price:" class="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-blue-400" />
                        </div>
                        <div class="flex items-center mb-10">
                            <label for="twitter" class="w-20 inline-block text-right mr-4 text-gray-500 text-gray-500">Description</label>
                            <input onChange={handleInputChange} type="text" name="description" id="description" placeholder="Service Description (min 50 character)" class="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-blue-400" />
                        </div>
                        <div class="flex items-center mb-10">
                            <label for="twitter" class="w-20 inline-block text-right mr-4 text-gray-500 text-gray-500">Image</label>
                            <input onChange={handleInputChange} type="text" name="img" id="img" placeholder="Add Image Url" class="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-blue-400" />
                        </div>
                        <div class="text-right">
                            <button class="py-3 px-8 bg-blue-500 text-blue-100 font-bold rounded">Submit</button>
                        </div>
                    </form>
                </div>
            </div>


        </div>
    );
};

export default AddService;