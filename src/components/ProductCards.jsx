import './ProductCards.css';

const click = ({ product }) => {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(product.id);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

const ProductCards = ({ product }) => {
    return (
        <div className="cards-container">
            <div className="product-card">
                <img
                    src={product.image_url}
                    alt={product.product_name}
                    className="product-image"
                />
                <div className="cards-text">
                    <h3>{product.product_name}</h3>
                    <p>{product.price} kr</p>
                    <button onClick={() => click({ product })}>Klicka</button>

                </div>
            </div>
        </div>
    );
};

export default ProductCards;
