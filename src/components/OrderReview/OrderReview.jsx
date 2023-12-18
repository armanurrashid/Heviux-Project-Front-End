// // import React from 'react';
// import './OrderReview.css'
// import remove_icon from '../../images/cart_cross_icon.png'
// import img5 from "../../images/p1_product.png";
// const OrderReview = () => {
//     return (

//         <div className='cartitems'>
//             <div>
//                 <div className="row row-cols-6 row-cols-xl-6 row-cols-lg-6 row-cols-md-6 g-4 pt-0 mt-1 fw-bold d-flex">
//                     <div className="col d-flex justify-content-around mt-0">
//                         <p>Products</p>
//                     </div>
//                     <div className="col d-flex justify-content-around mt-0">
//                         <p>Title</p>
//                     </div>
//                     <div className="col d-flex justify-content-around mt-0">
//                         <p>Price</p>
//                     </div>
//                     <div className="col d-flex justify-content-around mt-0">
//                         <p>Quantity</p>
//                     </div>
//                     <div className="col d-flex justify-content-around mt-0">
//                         <p>Total</p>
//                     </div>
//                     <div className="col d-flex justify-content-around mt-0">
//                         <p>Remove</p>
//                     </div>
//                 </div>
//                 <hr />
//                 <div className="row row-cols-6 row-cols-xl-6 row-cols-lg-6 row-cols-md-6 g-4 mb-2 pt-1 pb-1">
//                     <div className="col d-flex justify-content-around">
//                         <img src={img5} alt="" className='carticon-product-icon' />
//                     </div>
//                     <div className="col d-flex justify-content-around">
//                         <p>Women Pink Collection</p>
//                     </div>
//                     <div className="col d-flex justify-content-around">
//                         <p>$100</p>
//                     </div>
//                     <div className="col d-flex justify-content-around">
//                         <p>2</p>
//                     </div>
//                     <div className="col d-flex justify-content-around">
//                         <p>$200</p>
//                     </div>
//                     <div className="col d-flex justify-content-around">
//                         <img className='cartitems-remove-icon' src={remove_icon} alt="" />
//                     </div>
//                 </div>
//                 <hr />
//                 <div className="row row-cols-6 row-cols-xl-6 row-cols-lg-6 row-cols-md-6 g-4">
//                     <div className="col d-flex justify-content-around">
//                         <img src={img5} alt="" className='carticon-product-icon' />
//                     </div>
//                     <div className="col d-flex justify-content-around">
//                         <p>Women Pink Collection</p>
//                     </div>
//                     <div className="col d-flex justify-content-around">
//                         <p>$100</p>
//                     </div>
//                     <div className="col d-flex justify-content-around">
//                         <p>2</p>
//                     </div>
//                     <div className="col d-flex justify-content-around">
//                         <p>$200</p>
//                     </div>
//                     <div className="col d-flex justify-content-around">
//                         <img className='cartitems-remove-icon' src={remove_icon} alt="" />
//                     </div>
//                 </div>
//             </div>

//             <div className="cartitems-down">
//                 <div className="cartitems-total">
//                     <h4>Cart Total</h4>
//                     <div>
//                         <div className="cartitems-total-item">
//                             <p>Subtotal</p>
//                             <p>$200</p>
//                         </div>
//                         <hr />
//                         <div className="cartitems-total-item">
//                             <p>Delivery Fee</p>
//                             <p>Free</p>
//                         </div>
//                         <hr />
//                         <div className="cartitems-total-item">
//                             <h4>Total</h4>
//                             <h4>$100</h4>
//                         </div>
//                     </div>
//                     <button>PROCEED TO CHECKOUT</button>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default OrderReview;

import { useState } from 'react';
// import Cart from '../Cart/Cart';
import './OrderReview.css'
import { useLoaderData } from 'react-router-dom';
// import { Link, useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
// import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import ReviewItem from '../ReviewItem/ReviewItem';
// import ReviewItem from '../ReviewItem/ReviewItem';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons';

const OrderReview = () => {
    // const savedcart = useLoaderData();
    // const [cart, setCart] = useState(savedcart);

    // const handleRemoveFromCart = (id) => {
    //     const remaining = cart.filter(product => product.id !== id);
    //     setCart(remaining);
    //     removeFromDb(id);
    // }

    // const handleClearCart = () => {
    //     setCart([]);
    //     deleteShoppingCart();
    // }
    return (
        <div className='shop-container'>
            <div className="review-container">
                {
                    <ReviewItem ></ReviewItem>
                }
            </div>
            {/* <div className="cart-container">
                <Cart cart={cart} handleClearCart={handleClearCart}>
                    <Link className='proceed-link' to='/checkout'>
                        <button className='btn-proceed'>Proceed Checkout  <FontAwesomeIcon icon={faMoneyCheckDollar} ></FontAwesomeIcon></button>
                    </Link>
                </Cart>

            </div> */}
        </div>
    );
};

export default OrderReview;