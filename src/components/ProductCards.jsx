const ProductCards = ({ product }) => {
    return (
        <div className="product-card">
            <img
                src={product.image_url}
                alt={product.product_name}
                className="product-image"
            />
            <h3>{product.product_name}</h3>
            <p>{product.price} kr</p>
        </div>
    );
};

export default ProductCards;
