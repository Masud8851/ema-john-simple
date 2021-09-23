import './Cart.css'

import React from 'react';

const Cart = (props) => {

    // console.log(props.cart)
    const { cart } = props;
    let total = 0;
    for(const product of cart)
    {
        total = total + product.price;
    }

    const shipping = 15;
    const tax = (total + shipping) * 10;
    const grandTotal = total + shipping + tax;

    return (
        <div>
            <h4>Order Summary</h4>
            <h5>Items Order: {props.cart.length} </h5>
            <br />
            <p>Total: {total} </p>
            <br />
            <p>Shipping: {shipping}</p>
            <br />
            <p>Tax : {tax}</p>
            <br />
            <p>Grand Total: {grandTotal}</p>
        </div>
    );
};

export default Cart;