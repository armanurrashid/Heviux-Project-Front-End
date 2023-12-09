import React from 'react';
import './Men.css';

// Assume you have a JSON array with product data
const productData = [
  { id: 1, name: 'Product 1', image: '/src/images/slide-3.png', fabric: 'Cotton', gsm: 180, price: 190, },
  { id: 1, name: 'Product 1', image: '/src/images/slide-3.png', fabric: 'Cotton', gsm: 180, price: 190, },
  { id: 1, name: 'Product 1', image: '/src/images/slide-3.png', fabric: 'Cotton', gsm: 180, price: 190, },
  { id: 1, name: 'Product 1', image: '/src/images/slide-3.png', fabric: 'Cotton', gsm: 180, price: 190, },
  { id: 1, name: 'Product 1', image: '/src/images/slide-3.png', fabric: 'Cotton', gsm: 180, price: 190, },
  { id: 1, name: 'Product 1', image: '/src/images/slide-3.png', fabric: 'Cotton', gsm: 180, price: 190, },
  { id: 1, name: 'Product 1', image: '/src/images/slide-3.png', fabric: 'Cotton', gsm: 180, price: 190, },
  { id: 1, name: 'Product 1', image: '/src/images/slide-3.png', fabric: 'Cotton', gsm: 180, price: 190, },
];

const Orders = () => {
  return (
    <div>
      <div className="container py-2">
        <div className="row row-cols-1 row-cols-md-4 g-4 py-5 ">
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
                  <h4 className='mb-0'>{product.price}$</h4>
                  <a href="#" id='viewDetails'>View Details</a>
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
