import './ProductDetails.css'
import img1 from "../../images/p1_product_i2.png";
import img2 from "../../images/p1_product_i1.png";
import img3 from "../../images/p1_product_i3.png";
import img4 from "../../images/p1_product_i4.png";
import img5 from "../../images/p1_product.png";

const ProductDetails = () => {

    return (
        <div className='productdisplay'>
            <div className="row row-cols-1 row-cols-xl-2 row-cols-lg-2 row-cols-md-1 g-4 pt-4">
                <div className="col">
                    <div className='productdisplay-left d-flex justify-content-center'>
                        <div className="productdisplay-img-list">
                            <img src={img1} alt="" />
                            <img src={img2} alt="" />
                            <img src={img3} alt="" />
                            <img src={img4} alt="" />
                        </div>
                        <div className="productdisplay-img">
                            <img className='productdisplay-main-img' src={img5} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="productdisplay-right">
                        <h1>Women Pink Solid T-Shirt</h1>
                        <div className='mt-3 mb-2'>
                            <p className='productdisplay-right-category mb-1'><span>Category: </span><span className='text-muted'>Women, T-Shirt, Crop Top</span></p>
                            <p className='productdisplay-right-category mb-1'><span>Fabrics: </span><span className='text-muted'>Cotton</span></p>
                            <p className='productdisplay-right-category mb-1'><span>GSM: </span><span className='text-muted'>180</span></p>
                        </div>
                        <div className="productdisplay-right-prices">
                            <div className="productdisplay-right-price-old">$124</div>
                            <div className="productdisplay-right-price-new">$100</div>
                        </div>

                        <div className="productdisplay-right-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic pariatur voluptatem vel quis iste magni tempora rem fugiat nihil aliquid!</div>
                        <div className="productdisplay-right-size">
                            <h1>Select Size</h1>
                            <div className="productdisplay-right-sizes">
                                <div>S</div>
                                <div>M</div>
                                <div>L</div>
                                <div>XL</div>
                                <div>XXL</div>
                            </div>
                        </div>
                        <div>
                            <button className='me-4' style={{backgroundColor:"#1b2430"}}>ADD TO CART</button>
                            <button className='bg-success'>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default ProductDetails;