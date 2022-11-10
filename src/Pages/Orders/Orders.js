import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import OrderRow from './OrderRow';

const Orders = () => {
    const { user, logOut } = useContext(AuthContext);
    const [orders, setOrders] = useState([])
    useTitle('My Reviews - Delivery Service');
    const value = orders.filter(orderList => orderList.email === user?.email);
    useEffect(() => {
        fetch(`https://delivery-services-kappa.vercel.app/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('services-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => {
                setOrders(data);
            })
    }, [user?.email, logOut])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if (proceed) {
            fetch(`https://delivery-services-kappa.vercel.app/orders/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('services-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = orders.filter(odr => odr._id !== id);
                        setOrders(remaining);
                    }
                })
        }
    }

    const handleStatusUpdate = id => {
        fetch(`https://delivery-services-kappa.vercel.app/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('services-token')}`
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = orders.filter(odr => odr._id !== id);
                    const approving = orders.find(odr => odr._id === id);
                    approving.status = 'Approved'

                    const newOrders = [approving, ...remaining];
                    setOrders(newOrders);
                }
            })
    }

    if (value.length === 0) {
        return <h2 className="text-4xl mb-5 text-center">No reviews were added </h2>
    }
    else {
        return (

            <div>
                <h2 className="text-4xl mb-5">You Review {value.length} Services</h2>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead className='p-10'>
                            <tr>
                                <th>Service Name:</th>
                                <th>Review:</th>
                                {/* <th>Favorite Color</th> */}
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.filter(orderList => orderList.email === user?.email)
                                    .map(order => <OrderRow
                                        key={order._id}
                                        order={order}
                                        handleDelete={handleDelete}
                                        handleStatusUpdate={handleStatusUpdate}
                                    ></OrderRow>)

                            }
                        </tbody>
                    </table>
                </div>
            </div>

        );
    }

};

export default Orders;