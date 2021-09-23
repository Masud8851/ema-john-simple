import React, { useEffect, useState } from 'react';
import '../Shop/Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])

    useEffect(() =>{
        fetch('./products.JSON')
            .then(res=>res.json())
            .then(data=>setProducts(data))
    },[])

    return (
        <div className="shop-container">
            <div className="product-container">
                <h4>Products: {products.length} </h4>
                {
                    products.map(product => console.log(product))
                }
            </div>
            <div className="cart-container">
                <h4>Order Summary</h4>
                <h5>Items Order: </h5>
            </div>
        </div>
    );
};

export default Shop;