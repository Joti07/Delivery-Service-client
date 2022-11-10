import React from 'react';

const ReviewCard = ({ rev }) => {
    const { _id, service, serviceName, customer, email, message } = rev;
    return (
        <div class=" m-5 w-full">
            <div class="block p-2 rounded-lg border shadow-lg bg-white w-96">
                <h5><span class="text-gray-900  leading-tight font-medium mb-2">{customer} </span> (<span>{email}</span>)</h5>
                <p class="text-gray-700 text-base mb-4">
                    {message}
                </p>
                {/* <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button> */}
            </div>
        </div>


    );
};

export default ReviewCard;