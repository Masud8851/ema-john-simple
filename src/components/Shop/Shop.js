import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
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
                {
                    products.map(product => <Product
                        key={product.key} 
                        product={product}
                    ></Product>)
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