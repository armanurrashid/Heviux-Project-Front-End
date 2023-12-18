// import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import img from "../../images/p1_product.png";
const ReviewItem = () => {
    // const { } = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className="review-details">
                <p className='product-title'>1</p>
                <p>Price: <span className='orange-text'>$1</span></p>
                <p>Order Quantity: <span className='orange-text'>2</span></p>
            </div>
            <button className='button-delete'>
            <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default ReviewItem;