import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props)
    const {name,img, seller, price, stock } = props.product;

    return (
        <div>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h4>{stock}</h4>
        </div>
    );
};

export default Product;