import { useEffect, useState } from 'react';

const CartPage = () => {
        const [products, setProducts] = useState([]);

    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let productArray = [];

    useEffect(() => {
        console.log('useEffect körs!');

        cartItems.forEach((productId) => {
            fetch(`http://localhost:3000/product/${productId}`)
                .then((res) => res.json())
                .then((data) => {
                    productArray.push(data);
                });
        });


    }, []);

    return (
        <div className="cart-page">
            <h1>cart</h1>
        </div>
    );
};

export default CartPage;
