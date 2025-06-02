import { useEffect, useState } from 'react';
import './CartPage.css';

const CartPage = () => {
    const [product, setProduct] = useState([]);
    const [amount, setAmount] = useState(0);

    const [checkoutInfo, setCheckoutInfo] = useState({
        name: '',
        shippingAddress: '',
        postalCode: '',
        paymentMethod: 'credit_card'
    });

    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    useEffect(() => {
        let productArray = [];

        Promise.all(
            cartItems.map((productId) =>
                fetch(`http://localhost:3000/products/${productId}`)
                    .then((res) => res.json())
                    .then((data) => {
                        productArray.push(data);
                    })
            )
        ).then(() => {
            setProduct(productArray);
            const totalAmount = productArray.reduce(
                (amount, item) => amount + Number(item.price),
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
                {product.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    product.map((product) => (
                        <div key={product.id} className="cart-item">
                            <img
                                src={product.image_url}
                                alt={product.product_name}
                            />
                            <h3>{product.product_name}</h3>
                            <p>{product.price} kr</p>
                        </div>
                    ))
                )}
                <h3>Total: {amount} kr</h3>
            </div>
        </div>
    );
};

export default CartPage;
