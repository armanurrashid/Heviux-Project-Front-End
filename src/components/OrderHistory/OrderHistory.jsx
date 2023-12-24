// import React from 'react';
import './OrderHistory.css'
import img from "../../images/p1_product.png";
const OrderHistory = () => {
    return (
        <div >
            <div className="container">
                <div className='table-responsive my-5'>
                    <table className='table  table-hover table-row-gray-300 align-middle gs-0 gy-4'>
                        <thead>
                            <tr className='fw-bold text-muted'>
                                <th className='min-w-100px text-center ' style={{ width: '15%' }}>
                                    Image
                                </th>
                                <th className='min-w-100px text-center ' style={{ width: '38%' }}>
                                    Title
                                </th>
                                <th className='min-w-100px text-center ' style={{ width: '17%' }}>
                                    Quantity
                                </th>
                                <th className='min-w-100px text-center ' style={{ width: '10%' }}>
                                    Price
                                </th>
                                <th className='min-w-100px text-center ' style={{ width: '10%' }}>
                                    Date
                                </th>
                                <th className='min-w-100px text-center ' style={{ width: '10%' }}>
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                                <td className='text-center'><img src={img} width={"35px"} alt="" /></td>
                                <td className='text-center'>Mens T-Shirt</td>
                                <td className='text-center'>2</td>
                                <td className="text-center">$280</td>
                                <td className='text-center'>23/12/23</td>
                                <td className='text-center'>Pending</td>
                            </tr>
                            <tr>
                                <td className='text-center'><img src={img} width={"35px"} alt="" /></td>
                                <td className='text-center'>Mens Jeans</td>
                                <td className='text-center'>1</td>
                                <td className="text-center">$200</td>
                                <td className='text-center'>23/12/23</td>
                                <td className='text-center'>Pending</td>
                            </tr>
                            <tr>
                                <td className='text-center'><img src={img} width={"35px"} alt="" /></td>
                                <td className='text-center'>Mens Polo T-Shirt</td>
                                <td className='text-center'>1</td>
                                <td className="text-center">$350</td>
                                <td className='text-center'>23/12/23</td>
                                <td className='text-center'>Delivered</td>
                            </tr>
                            <tr>
                                <td className='text-center'><img src={img} width={"35px"} alt="" /></td>
                                <td className='text-center'>Women Skirt</td>
                                <td className='text-center'>4</td>
                                <td className="text-center">$540</td>
                                <td className='text-center'>23/12/23</td>
                                <td className='text-center'>Delivered</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OrderHistory;