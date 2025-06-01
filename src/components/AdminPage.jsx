import React, { useState, useEffect } from 'react';
import ProductForm from './ProductForm';

function AdminPage() {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [refreshToggle, setRefreshToggle] = useState(false);

  // Fetch products on mount and whenever refreshToggle changes
  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, [refreshToggle]);

  // When a product is saved, refresh the products list and clear selection
  function handleSaved() {
    setRefreshToggle(!refreshToggle);
    setSelectedProductId(null);
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Admin Page</h1>

      <button
        onClick={() => setSelectedProductId(null)}
        style={{ marginBottom: '20px' }}
      >
        Add New Product
      </button>

      <div style={{ display: 'flex', gap: '40px' }}>
        {/* Products list */}
        <div style={{ flex: 1 }}>
          <h2>Products</h2>
          {products.length === 0 && <p>No products found.</p>}
          <ul>
            {products.map((product) => (
              <li key={product.id} style={{ marginBottom: '10px' }}>
                <button
                  onClick={() => setSelectedProductId(product.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'blue',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    padding: 0,
                    fontSize: '1rem',
                  }}
                >
                  {product.product_name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Product form */}
        <div style={{ flex: 1 }}>
          <h2>{selectedProductId ? 'Edit Product' : 'Add New Product'}</h2>
          <ProductForm productId={selectedProductId} onSaved={handleSaved} />
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
