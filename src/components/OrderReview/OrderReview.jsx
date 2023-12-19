import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons'
import img from "../../images/p1_product.png";
import './OrderReview.css'
const OrderReview = () => {
    return (
        <div className='shop-container'>
            <div className="review-container">
                {
                    <div className='container mb-3 mt-1'>
                        <div className="row row-cols-1 row-col-xxl-2 row-cols-xl-1 row-cols-lg-1 row-cols-md-1 g-4 pt-4 pb-5 ">
                            <div className="col-xxl-9 col-xl-9 col-lg-9">
                                <div className='d-flex flex-wrap justify-content-center'>
                                    <div className='review-item mb-3'>
                                        <img src={img} alt="" className="img-fluid" />
                                        <div className="review-details">
                                            <p className='product-title'>1</p>
                                            <p>Price: <span className='orange-text'>$2</span></p>
                                            <p>Order Quantity: <span className='orange-text'>2</span></p>
                                        </div>
                                        <button className='button-delete'>
                                            <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />
                                        </button>
                                    </div>
                                    <div className='review-item mb-3'>
                                        <img src={img} alt="" className="img-fluid" />
                                        <div className="review-details">
                                            <p className='product-title'>1</p>
                                            <p>Price: <span className='orange-text'>$2</span></p>
                                            <p>Order Quantity: <span className='orange-text'>2</span></p>
                                        </div>
                                        <button className='button-delete'>
                                            <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />
                                        </button>
                                    </div>
                                    <div className='review-item mb-3'>
                                        <img src={img} alt="" className="img-fluid" />
                                        <div className="review-details">
                                            <p className='product-title'>1</p>
                                            <p>Price: <span className='orange-text'>$1</span></p>
                                            <p>Order Quantity: <span className='orange-text'>2</span></p>
                                        </div>
                                        <button className='button-delete'>
                                            <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />
                                        </button>
                                    </div>
                                    <div className='review-item mb-3'>
                                        <img src={img} alt="" className="img-fluid" />
                                        <div className="review-details">
                                            <p className='product-title'>1</p>
                                            <p>Price: <span className='orange-text'>$1</span></p>
                                            <p>Order Quantity: <span className='orange-text'>2</span></p>
                                        </div>
                                        <button className='button-delete'>
                                            <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />
                                        </button>
                                    </div>
                                    <div className='review-item mb-3'>
                                        <img src={img} alt="" className="img-fluid" />
                                        <div className="review-details">
                                            <p className='product-title'>1</p>
                                            <p>Price: <span className='orange-text'>$1</span></p>
                                            <p>Order Quantity: <span className='orange-text'>2</span></p>
                                        </div>
                                        <button className='button-delete'>
                                            <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />
                                        </button>
                                    </div>
                                    <div className='review-item mb-3'>
                                        <img src={img} alt="" className="img-fluid" />
                                        <div className="review-details">
                                            <p className='product-title'>1</p>
                                            <p>Price: <span className='orange-text'>$1</span></p>
                                            <p>Order Quantity: <span className='orange-text'>2</span></p>
                                        </div>
                                        <button className='button-delete'>
                                            <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-3 col-lg-3 order">
                                <div className="p-3 order-details">
                                    <h5 className='text-center mb-3'>Order</h5>
                                    <hr />
                                    <div className='d-flex justify-content-between'>
                                        <div><p><b>Selected Item:</b></p></div>
                                        <div>4</div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div><p><b>Total Price:</b></p></div>
                                        <div>$1055</div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div><p><b>Delivery Fee:</b></p></div>
                                        <div>$100</div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div><p><b>Total Amount:</b></p></div>
                                        <div>$1155</div>
                                    </div>
                                    
                                    {/* <button className='btn-clear-cart '><span>Clear Cart </span>
                                        <FontAwesomeIcon icon={faTrashAlt} />
                                    </button> */}
                                    <button className='btn-proceed'>Payment  <FontAwesomeIcon icon={faMoneyCheckDollar} ></FontAwesomeIcon></button>
                                </div>
                            </div>

                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default OrderReview;