import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    // console.log(props)
    const {name,img, seller, price, stock } = props.product;

    // Font Awesome
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

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
                <button 
                    onClick={ () => props.handleAddCart(props.product)}
                    className="btn-regular"> {cartIcon} Add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;