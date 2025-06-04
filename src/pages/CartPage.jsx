import { useEffect, useState } from 'react';
import './CartPage.css';
import Footer from '../components/Footer';

const CartPage = () => {
    const [products, setProducts] = useState([]);
    const [amount, setAmount] = useState(0);

    const [checkoutInfo, setCheckoutInfo] = useState({
        name: '',
        shippingAddress: '',
        postalCode: '',
        paymentMethod: 'credit_card'
    });

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        Promise.all(
            cartItems.map((productId) =>
                fetch(`http://localhost:3000/products/${productId}`).then(
                    (res) => res.json()
                )
            )
        ).then((fetchedProducts) => {
            setProducts(fetchedProducts);
            const totalAmount = fetchedProducts.reduce(
                (sum, item) => sum + Number(item.price),
                0
            );
            setAmount(totalAmount);
        });
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setCheckoutInfo((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    return (
        <>
            <div className="cart-page-container">
                <div className="checkout-form">
                    <h2>Checkout</h2>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={checkoutInfo.name}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label>
                        Shipping Address:
                        <input
                            type="text"
                            name="shippingAddress"
                            value={checkoutInfo.shippingAddress}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label>
                        Postal Code:
                        <input
                            type="text"
                            name="postalCode"
                            value={checkoutInfo.postalCode}
                            onChange={handleChange}
                            required
                        />
                    </label>

                    <label>
                        Payment Method:
                        <select
                            name="paymentMethod"
                            value={checkoutInfo.paymentMethod}
                            onChange={handleChange}
                        >
                            <option value="credit_card">Credit Card</option>
                            <option value="paypal">PayPal</option>
                            <option value="swish">Swish</option>
                        </select>
                    </label>

                    <button className="pay-now-btn">Pay Now</button>
                </div>

                <div className="cart-summary">
                    <h2>Your Products</h2>
                    {products.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        products.map((product, index) => (
                            <div
                                key={`${product.id}-${index}`}
                                className="cart-item"
                            >
                                <div className="item-info">
                                    <img
                                        src={product.image_url}
                                        alt={product.product_name}
                                    />
                                    <h3>{product.product_name}</h3>
                                </div>
                                <p>{product.price} kr</p>
                            </div>
                        ))
                    )}
                    <h3>Total: {amount} kr</h3>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CartPage;
