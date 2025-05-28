// src/components/Products.jsx
import { useEffect, useState } from 'react';

function Products() {
    const [products, setProducts] = useState([]);

   useEffect(() => {
  fetch('http://localhost:3000/products')
    .then((res) => {
      console.log('Fick svar från servern');
      return res.json();
    })
    .then((data) => {
      console.log('Data från API:', data);
      setProducts(data);
    })
    .catch((err) => {
      console.error('Kunde inte hämta produkter:', err);
    });
}, []);


    return (
        <div>
            <h2>Rose & Rue</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <img
                            src={product.image_url}
                            alt={product.product_name}
                            width="100"
                        />
                        <h3>{product.product_name}</h3>
                        <p>Pris: {product.price} kr</p>
                        <p>Färg: {product.color}</p>
                        <p>Vattenbehov: {product.water_needs}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Products;
