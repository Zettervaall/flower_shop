import { useEffect, useState } from 'react';

const CartPage = () => {
    const [product, setProduct] = useState([]);
    const [amount, setAmount] = useState(0);

    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    useEffect(() => {
        console.log('cartItems:', cartItems);

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
            const totalAmount = productArray.reduce((amount, item) => {
                return amount + Number(item.price);
            }, 0);

            setAmount(totalAmount);
            console.log('Item:', item.product_name, 'Pris:', item.price);
        });
    }, []);

    return (
        <>
            <div className="cart-page">
                <h1>cart</h1>
                {product.map((product) => (
                    <div key={product.id} className="cart-item">
                        <img
                            src={product.image_url}
                            alt={product.product_name}
                        />
                        <h3>{product.product_name}</h3>
                        <p>{product.price} kr</p>
                    </div>
                ))}
            </div>
            <h2>Total: {amount} kr</h2>
        </>
    );
};

export default CartPage;
