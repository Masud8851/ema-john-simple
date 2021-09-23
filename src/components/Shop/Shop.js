import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import '../Shop/Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() =>{
        fetch('./products.JSON')
            .then(res=>res.json())
            .then(data=>setProducts(data))
    },[])

    const handleAddCart = (product) => {
        // console.log(product)
        const newCart = [...cart,product]
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product
                        key = {product.key} 
                        product = {product}
                        handleAddCart = {handleAddCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h4>Order Summary</h4>
                <h5>Items Order: {cart.length} </h5>
            </div>
        </div>
    );
};

export default Shop;