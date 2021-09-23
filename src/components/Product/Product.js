import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props)
    const {name,img, price, stock } = props.product;

    return (
        <div>
            <img src={img} alt="" />
            <h2>{name}</h2>
        </div>
    );
};

export default Product;