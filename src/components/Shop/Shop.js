import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import '../Shop/Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() =>{
        console.log('API Called')
        fetch('./products.JSON')
            .then(res=>res.json())
            .then(data=> {
                setProducts(data)
                console.log('Product received')
            })
    },[])

    useEffect(() =>{
        console.log('L S Called')
        if(products.length){
            const savedCart = getStoredCart();
            const storeCart = [];
            for(const key in savedCart){
                // console.log(key);
                const addedProduct = products.find ( product => product.key === key);
                // console.log(addedProduct);
                if(addedProduct){
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storeCart.push(addedProduct);
                }
            }
            setCart(storeCart);
        }
    },[products])

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