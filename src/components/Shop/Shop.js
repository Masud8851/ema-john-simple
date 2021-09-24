import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
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

    useEffect(() =>{
        const savedCart = getStoredCart();
        for(const key in savedCart){
            console.log(key);
        }
    },[])

    const handleAddCart = (product) => {
        // console.log(product)
        const newCart = [...cart, product]
        setCart(newCart);
        // save to local storage
        addToDb(product.key)
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
                <Cart
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;