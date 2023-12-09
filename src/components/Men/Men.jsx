// import React from 'react';
import './Men.css';
import Dropdown from 'react-bootstrap/Dropdown';
// Assume you have a JSON array with product data
const productData = [
    { id: 1, name: 'Classic Fit Shirt', image: '/src/images/slide-3.png', fabric: 'Cotton', gsm: 180, price: 190, },
    { id: 1, name: 'Casual Fit Shirt', image: '/src/images/slide-3.png', fabric: 'Cotton', gsm: 190, price: 130, },
    { id: 1, name: 'Printed Premium Shirt', image: '/src/images/slide-3.png', fabric: 'Cotton', gsm: 170, price: 250, },
    { id: 1, name: 'Full Sleeve Shirt', image: '/src/images/slide-3.png', fabric: 'Cotton', gsm: 180, price: 170, },
    { id: 1, name: 'Premium Cotton Jacket', image: '/src/images/slide-3.png', fabric: 'Cotton', gsm: 145, price: 120, },
    { id: 1, name: 'Full Sleeve Jacket', image: '/src/images/slide-3.png', fabric: 'Cotton', gsm: 190, price: 470, },
    { id: 1, name: 'Blue Jeans', image: '/src/images/slide-3.png', fabric: 'Cotton', gsm: 150, price: 165, },
    { id: 1, name: 'New Black Jeans', image: '/src/images/slide-3.png', fabric: 'Cotton', gsm: 180, price: 354, },
];

const Orders = () => {
    return (
        <div>
            <div className="container py-2">
                <div className='d-flex pt-3 ps-3'>
                    <div className='d-flex'>
                        <img src="/src/images/settings-sliders.png" alt="" id="filterImg" />
                    </div>
                    <div className='d-flex flex-row align-items-center'>
                        <h5 className='mb-0 ms-2'>Filters</h5>
                    </div>
                    <div className='ps-4'>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Product Categories
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Shirt</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">T-Shirt</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Jeans Pant</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Joggers</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Blazzer</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-lg-4 row-cols-md-3 g-4 pt-4 pb-5">
                    {productData.map((product) => (
                        <div key={product.id} className="col d-flex justify-content-around">
                            <div className="card">
                                <div className='d-flex justify-content-center'>
                                    <img src={product.image} className="card-img-top" alt="..." />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <div className='d-flex justify-content-between'>
                                        <div>
                                            <p className="card-text text-muted">Fabric: {product.fabric}</p>
                                        </div>
                                        <div>
                                            <p className="card-text text-muted ps-4">GSM: {product.gsm}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between card-body pb-0">
                                    <div className='d-flex flex-row align-items-center'>
                                        <h5 className='mb-0 '>€{product.price}</h5>
                                    </div>
                                    <div>
                                        <a href="#" id='viewDetails'>Details</a>
                                    </div>


                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Orders;
