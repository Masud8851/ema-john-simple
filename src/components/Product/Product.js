import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props)
    const {name,img, seller, price, stock } = props.product;

    return (
        <div>
            <div>
                <img src={img} alt="" />
            </div>
            <h2>{name}</h2>
            <p><small>by: {seller}</small></p>
            <p>Price: {price}</p>
        </div>
    );
};

export default Product;