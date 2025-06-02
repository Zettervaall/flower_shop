import './ProductCards.css';
import { Link } from 'react-router-dom';

const click = ({ product }) => {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(product.id);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

const ProductCards = ({ product }) => {
    return (
        <div className="cards-container">
            <Link to={`/info/${product.id}`} className="product-card">
                <img
                    src={product.image_url}
                    alt={product.product_name}
                    className="product-image"
                />
                <div className="cards-text">
                    <h3>{product.product_name}</h3>
                    <div className="price-and-button">
                        <p>{product.price} kr</p>
                        <button
                            onClick={(e) => {
                                e.preventDefault(); // hindrar att inte länken triggas av knappen
                                click({ product });
                            }}
                        >
                            Add to cart
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCards;
