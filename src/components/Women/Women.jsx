import { useState } from 'react';
import '../Men/Men.css';
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import img from "../../images/slide-3.png";
import filterImg from "../../images/settings-sliders.png";
import men_banner from '../../images/banner_mens.png'

const productData = [
    { id: 1, name: 'Classic Fit Shirt', image: img, fabric: 'Cotton', gsm: 180, price: 190, },
    { id: 2, name: 'Casual Fit Shirt', image: img, fabric: 'Cotton', gsm: 190, price: 130, },
    { id: 3, name: 'Printed Premium Shirt', image: img, fabric: 'Cotton', gsm: 170, price: 250, },
    { id: 4, name: 'Full Sleeve Shirt', image: img, fabric: 'Cotton', gsm: 180, price: 170, },
    { id: 5, name: 'Premium Cotton Jacket', image: img, fabric: 'Cotton', gsm: 145, price: 120, },
    { id: 6, name: 'Full Sleeve Jacket', image: img, fabric: 'Cotton', gsm: 190, price: 470, },
    { id: 7, name: 'Blue Jeans', image: img, fabric: 'Cotton', gsm: 150, price: 165, },
    { id: 8, name: 'New Black Jeans', image: img, fabric: 'Cotton', gsm: 180, price: 354, },
    { id: 9, name: 'Classic Fit Shirt', image: img, fabric: 'Cotton', gsm: 180, price: 190, },
    { id: 10, name: 'Casual Fit Shirt', image: img, fabric: 'Cotton', gsm: 190, price: 130, },
    { id: 11, name: 'Printed Premium Shirt', image: img, fabric: 'Cotton', gsm: 170, price: 250, },
    { id: 12, name: 'Full Sleeve Shirt', image: img, fabric: 'Cotton', gsm: 180, price: 170, },
    { id: 9, name: 'Classic Fit Shirt', image: img, fabric: 'Cotton', gsm: 180, price: 190, },
    { id: 10, name: 'Casual Fit Shirt', image: img, fabric: 'Cotton', gsm: 190, price: 130, },
    { id: 11, name: 'Printed Premium Shirt', image: img, fabric: 'Cotton', gsm: 170, price: 250, },
    { id: 12, name: 'Full Sleeve Shirt', image: img, fabric: 'Cotton', gsm: 180, price: 170, },
];
const Women = () => {
    const itemsPerPage = 12; // Number of items to display per page
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(productData.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            handlePageChange(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            handlePageChange(currentPage - 1);
        }
    };

    return (
        <div>
            <div className="container py-2">
                <div className='my-5'>
                    <img src={men_banner} className="d-block w-100" alt="..." />
                </div>
                <div className='d-flex pt-3 ps-3'>
                    <div className='d-flex'>
                        <img src={filterImg} alt="" id="filterImg" />
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
                <div className="row row-cols-1 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 g-4 pt-4 pb-5">
                    {productData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((product) => (
                        <div key={product.id} className="col d-flex justify-content-around">
                            <div className="card dressCard">
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
                                        <Link
                                            to="/ProductDetails" id='viewDetails'
                                        >Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='d-flex justify-content-end mb-2 me-2 pages'>
                    <ul className="pagination" >
                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                            <a className={`page-link px-3 py-2 ${currentPage === 1 ? 'text-secondary fw-bold' : 'text-success fw-bold'}`} href="#" tabIndex="-1" onClick={handlePrevPage}>{'Prev'}</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link px-3 py-2 text-success" href="#">{currentPage} of {totalPages} <span className="sr-only">(current)</span></a>
                        </li>
                        <li className={`page-item ${currentPage >= totalPages ? 'disabled' : ''}`}>
                            <a className={`page-link px-3 py-2 ${currentPage >= totalPages ? 'text-secondary fw-bold' : 'text-success fw-bold'}`} href="#" onClick={handleNextPage}>{'Next'}</a>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    );
};

export default Women;