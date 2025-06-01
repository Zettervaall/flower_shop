import { useEffect, useState } from 'react';
import ProductCards from '../components/ProductCards';
import './ProductPage.css';

const ProductPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log('useEffect körs!');

        fetch('http://localhost:3000/products')
            .then((res) => res.json())
            .then((data) => {
                console.log('Hämtade produkter:', data);
                setProducts(data);
            })
            .catch((err) => console.error('Kunde inte hämta produkter:', err));
    }, []);

    return (
        <div className="product-page">
            <h1>Alla produkter</h1>
            <div className="product-grid">
                {products.map((product) => (
                    <ProductCards key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductPage;
