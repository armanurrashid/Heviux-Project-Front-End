// import React from 'react';
import './OrderHistory.css';
import img from '../../images/p1_product.png';

const orderHistoryData = [
    {
        id: 1, image: img,
        title: 'Mens T-Shirt',
        quantity: 2,
        size:"M",
        price: '€280',
        date: '23/12/23',
        status: 'Pending',
    },
    {
        id: 2,
        image: img,
        title: 'Mens Jeans',
        quantity: 1,
        size:"M",
        price: '€200',
        date: '23/12/23',
        status: 'Pending',
    },
    {
        id: 3,
        image: img,
        title: 'Mens Polo T-Shirt',
        quantity: 1,
        size:"M",
        price: '€350',
        date: '23/12/23',
        status: 'Delivered',
    },
    {
        id: 4,
        image: img,
        title: 'Women Skirt',
        quantity: 4,
        size:"M",
        price: '€540',
        date: '23/12/23',
        status: 'Delivered',
    },
];

const OrderHistory = () => {
    return (
        <div>
            <div className="container">
                <div className="table-responsive my-5">
                    <table className="table table-hover table-row-gray-300 align-middle gs-0 gy-4">
                        <thead>
                            <tr className="fw-bold text-muted">
                                <th className="min-w-100px text-center" style={{ width: '15%' }}>
                                    Image
                                </th>
                                <th className="min-w-100px text-center" style={{ width: '35%' }}>
                                    Title
                                </th>
                                <th className="min-w-100px text-center" style={{ width: '10%' }}>
                                    Quantity
                                </th>
                                <th className="min-w-100px text-center" style={{ width: '10%' }}>
                                    Size
                                </th>
                                <th className="min-w-100px text-center" style={{ width: '10%' }}>
                                    Price
                                </th>
                                <th className="min-w-100px text-center" style={{ width: '10%' }}>
                                    Date
                                </th>
                                <th className="min-w-100px text-center" style={{ width: '10%' }}>
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderHistoryData.map((order) => (
                                <tr key={order.id}>
                                    <td className="text-center">
                                        <img src={order.image} width={'35px'} alt="" />
                                    </td>
                                    <td className="text-center">{order.title}</td>
                                    <td className="text-center">{order.quantity}</td>
                                    <td className="text-center">{order.size}</td>
                                    <td className="text-center">{order.price}</td>
                                    <td className="text-center">{order.date}</td>
                                    <td className="text-center">{order.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OrderHistory;
