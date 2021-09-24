import './Cart.css'
import React from 'react';

const Cart = (props) => {

    // console.log(props.cart)
    const { cart } = props;

    let totalQuantity = 0;
    let total = 0;
    for(const product of cart)
    {
        if(!product.quantity){
            product.quantity = 1;
        }
        total = (total + product.price) * product.quantity ;
        totalQuantity = totalQuantity + product.quantity;
    }

    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * .10;
    const grandTotal = total + shipping + tax;

    return (
        <div>
            <h4>Order Summary</h4>
            {/* <h5>Items Order: {props.cart.length} </h5> */}
            <h5>Items Order: {totalQuantity} </h5>
            <br />
            <p>Total: {total.toFixed(2)} </p>
            <br />
            <p>Shipping: {shipping}</p>
            <br />
            <p>Tax : {tax.toFixed(2)}</p>
            <br />
            <p>Grand Total: {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;