import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
        <div className="product-detail">
            <h1>{product.product_name}</h1>
            <img src={product.image_url} alt={product.product_name} />
            <p>Pris: {product.price} kr</p>
            <p>Färg: {product.color}</p>
            <p>Vattenbehov: {product.water_needs}</p>
        </div>
    );
};

export default ProductDetailPage;
