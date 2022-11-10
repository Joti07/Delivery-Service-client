import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({ order, handleDelete, handleStatusUpdate }) => {
    const { _id, serviceName, phone, customer, price, service, status, message, email } = order;
    const [orderService, setOrderService] = useState({})

    useEffect(() => {
        fetch(`https://delivery-services-kappa.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data));
    }, [service])



    return (
        <tr>


            {/* <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {
                                orderService?.img &&
                                <img src={orderService.img} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                    </div>
                </div>
            </td> */}
            <td>
                <div className="rounded w-24 h-24">
                    {
                        orderService?.img &&
                        <img src={orderService.img} alt="Avatar Tailwind CSS Component" />}
                </div>
                {serviceName}
                {/* <br />
                <span className="badge badge-ghost badge-sm">${price}</span> */}
            </td>
            <td>{message}</td>
            <th>
                <Link to={`/update/${_id}`}>
                    <button onClick={() => handleStatusUpdate(_id)} type="button" class="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900">Edit</button>
                </Link>

                {/* <button
                    onClick={() => handleStatusUpdate(_id)}
                    className="btn btn-ghost btn-xs">{status ? status : 'pending'}</button> */}
                <button onClick={() => handleDelete(_id)} type="button" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>


            </th>
            {/* <th>

                <button onClick={() => handleDelete(_id)} className='btn btn-ghost '>X</button>
                <button onClick={() => handleDelete(_id)} type="button" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>

            </th> */}
        </tr>
    );
};

export default OrderRow;