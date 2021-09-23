import React from 'react';
import './Product.css'

const Product = (props) => {
    
    const {name,img, seller, price, stock } = props.product;

    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="details">
                <h4 className="product-name mb">{name}</h4>
                <p className="mb"><small>by: {seller}</small></p>
                <p className="mb">Price: {price}</p>
                <p className="mb">Only {stock} left in stock. Order Soon.</p>
                <button className="btn-regular">Add to cart</button>
            </div>
        </div>
    );
};

export default Product;