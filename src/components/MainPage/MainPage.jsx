// import React from 'react';
import './mainpage.css'
// import hand_icon from '../../images/hand_icon.png'
// import arrow_icon from '../../images/arrow.png'
// import hero_image from '../../images/hero_image.png'
import img from "../../images/slide-3.png";
import { Link } from "react-router-dom";

const productData = [
    { id: 1, name: 'Classic Fit Shirt', image: img, fabric: 'Cotton', gsm: 180, price: 190, },
    { id: 2, name: 'Casual Fit Shirt', image: img, fabric: 'Cotton', gsm: 190, price: 130, },
    { id: 3, name: 'Printed Premium Shirt', image: img, fabric: 'Cotton', gsm: 170, price: 250, },
    { id: 4, name: 'Full Sleeve Shirt', image: img, fabric: 'Cotton', gsm: 180, price: 170, },
    { id: 5, name: 'Premium Cotton Jacket', image: img, fabric: 'Cotton', gsm: 145, price: 120, },
    { id: 6, name: 'Full Sleeve Jacket', image: img, fabric: 'Cotton', gsm: 190, price: 470, },
    { id: 7, name: 'Blue Jeans', image: img, fabric: 'Cotton', gsm: 150, price: 165, },
    { id: 8, name: 'New Black Jeans', image: img, fabric: 'Cotton', gsm: 180, price: 354, },
];

const MainPage = () => {
    return (
        <div className="hero">
            {/* <div className="row row-cols-1 row-cols-xl-2 row-cols-lg-2 row-cols-md-2 g-4 pb-5 mt-5">
                <div className="col-xxl-8 col-xl-8 col-lg-8"><div className="hero-left">
                    <h2>NEW ARRIVALS ONLY</h2>
                    <div>
                        <div className="hero-hand-icon">
                            <p>New</p>
                            <img src={hand_icon} alt="" />
                        </div>
                        <p>collections</p>
                        <p>for everyone</p>
                    </div>
                    <div className="hero-latest-btn">
                        <div>Latest Collection</div>
                        <img src={arrow_icon} alt="" />
                    </div>
                </div></div>
                <div className="col-xxl-4 col-xl-4 col-lg-4 d-flex justify-content-around ps-0"><div className="hero-right">
                    <img className='hero_image' src={hero_image} alt="" />
                </div></div>
            </div> */}
            <div className='popular'><h1>Popular in Men</h1><hr /></div>
            <div className="row row-cols-1 row-cols-xl-4 row-cols-lg-3 row-cols-md-2 g-4 pt-4 pb-5">
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
                                        <Link
                                            to="/ProductDetails" id='viewDetails'
                                        >Details
                                        </Link>
                                        {/* <a href="#" id='viewDetails'>Details</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
        // <div className='mainpage'>
        //     <div className='img-div flex-item'>
        //         <img src="/src/images/model2.png" alt="" />
        //     </div>
        //     <div className='text-div flex-item'>
        //         <h1>New Collection <br/>For Fall</h1>
        //         <h3>Discover all the new arrival of ready-to-wear collection. </h3>
        //     </div>
        // </div>
    );
};

export default MainPage;