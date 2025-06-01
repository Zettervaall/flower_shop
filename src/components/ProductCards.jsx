import './ProductCards.css';

const ProductCards = ({ product }) => {
    return (
        <div className="cards-container">
            <div className="product-card">
                <img
                    src={product.image_url}
                    alt={product.product_name}
                    className="product-image"
                />
                <div className='cards-text'>
                <h3>{product.product_name}</h3>
                <p>{product.price} kr</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCards;
