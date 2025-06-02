import { useEffect, useState } from 'react';
import ProductCards from '../components/ProductCards';
import Footer from '../components/Footer';
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
        <>
            <div className="product-page">
                <h1>Flowers</h1>
                <div className="products-text">
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Porro vitae illo, tenetur consequatur molestiae
                        tempore possimus enim laudantium, assumenda neque
                        perferendis similique alias quas reprehenderit repellat
                        qui at quis corporis.
                        <br />
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Porro vitae illo, tenetur consequatur
                            molestiae tempore possimus enim laudantium,
                            assumenda neque perferendis similique alias quas
                            reprehenderit repellat qui at quis corporis.
                        </p>
                    </p>
                </div>
                <div className="divider-with-text">
                    <h2>All products</h2>
                </div>
                <div className="product-grid">
                    {products.map((product) => (
                        <ProductCards key={product.id} product={product} />
                    ))}
                </div>
                <button className="load-more"> Load more...</button>
            </div>
            <Footer />
        </>
    );
};

export default ProductPage;
