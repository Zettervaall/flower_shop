import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetailPage.css';

const ProductDetailPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/products/${productId}`)
            .then((res) => res.json())
            .then((data) => setProduct(data))
            .catch((err) => console.error('Kunde inte hämta produkt:', err));
    }, [productId]);

    if (!product) return <p>Laddar...</p>;

    return (
        <div className="page-wrapper">
            <div className="product-detail-container">
                <div className="product-image">
                    <img
                        src={
                            product.image_url.startsWith('/')
                                ? product.image_url
                                : `/${product.image_url}`
                        }
                        alt={product.product_name}
                    />
                </div>
                <div className="product-info">
                    <h1>{product.product_name}</h1>
                    <p>Pris: {product.price} kr</p>
                    <p>Färg: {product.color}</p>
                    <p>Vattenbehov: {product.water_needs}</p>
                    <button className="add-to-cart-btn">
                        Lägg till i kundvagn
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
