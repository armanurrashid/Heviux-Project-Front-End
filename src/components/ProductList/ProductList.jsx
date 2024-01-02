// import React from 'react';

import { useState } from 'react';
import img from '../../images/p1_product.png';
import './ProductList.css'
const UserData = [
    {
        id: 1,
        image: img,
        name: 'Tamim Iqbal',
        email: 'tamim@gmail.com',
        mobile: '019348235457',
        address: 'Bangladesh',
        action: 'remove'
        // status: 'Pending',
    },
    {
        id: 2,
        image: img,
        name: 'Soumya Sarkar',
        email: 'souyma@gmail.com',
        mobile: '012348235457',
        address: 'India',
        action: 'remove'
    },
    {
        id: 3,
        image: img,
        name: 'Shakib Al Hasan',
        email: 'shakib@gmail.com',
        mobile: '013348235457',
        address: 'Japan',
        action: 'remove'
    },
    {
        id: 4,
        image: img,
        name: 'Nazmul Hasan',
        email: 'nazmul@gmail.com',
        mobile: '014348235457',
        address: 'French',
        action: 'remove'
    },
    {
        id: 5,
        image: img,
        name: 'Mushfiqur Rahim',
        email: 'mushfiq@gmail.com',
        mobile: '015348235457',
        address: 'Pakistan',
        action: 'remove'
    },
    {
        id: 6,
        image: img,
        name: 'Mahmudullah Riad',
        email: 'mahmudullah@gmail.com',
        mobile: '016348235457',
        address: 'Australia',
        action: 'remove'
    },
    {
        id: 7,
        image: img,
        name: 'Mehedi Hasan',
        email: 'mehedi@gmail.com',
        mobile: '017348235457',
        address: 'SriLanka',
        action: 'remove'
    },
    {
        id: 8,
        image: img,
        name: 'Mashrafe Bin Mortaza',
        email: 'mashrafe@gmail.com',
        mobile: '018348235457',
        address: 'Russia',
        action: 'remove'
    },
];

const ProductList = () => {
    const [query, setQuery] = useState("");
    return (
        <div>
            <div className="container">
                <div className='mt-2'>
                    <div className="table_header">
                        <h5></h5>
                        <div>
                            <input placeholder='Search User' onChange={(e) => setQuery(e.target.value)} />
                            <button className='add_new'>+ Add New</button>
                        </div>
                    </div>
                </div>
                <div className="table-responsive mt-3 mb-3">
                    <table className="table table-hover table-row-gray-300 align-middle gs-0 gy-4">
                        <thead>
                            <tr className="fw-bold text-muted">
                                <th className="min-w-100px text-center" style={{ width: '5%' }}>
                                    Image
                                </th>
                                <th className="min-w-100px text-center" style={{ width: '20%' }}>
                                    User Name
                                </th>
                                <th className="min-w-100px text-center" style={{ width: '20%' }}>
                                    Email
                                </th>
                                <th className="min-w-100px text-center" style={{ width: '15%' }}>
                                    Mobile
                                </th>
                                <th className="min-w-100px text-center" style={{ width: '30%' }}>
                                    Address
                                </th>
                                <th className="min-w-100px text-center" style={{ width: '10%' }}>
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {UserData.filter((user) =>
                                Object.values(user).some(
                                    (field) =>
                                        typeof field === 'string' && field.toLowerCase().includes(query.toLowerCase())
                                )
                            ).map((order) => (
                                <tr key={order.id}>
                                    <td className="text-center">
                                        <img src={order.image} width={'35px'} alt="" />
                                    </td>
                                    <td className="text-center">{order.name}</td>
                                    <td className="text-center">{order.email}</td>
                                    <td className="text-center">{order.mobile}</td>
                                    <td className="text-center">{order.address}</td>
                                    <td className="text-center">{order.action}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
