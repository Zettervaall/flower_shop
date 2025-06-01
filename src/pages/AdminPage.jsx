import React, { useState, useEffect } from 'react';
import ProductForm from '../components/ProductForm';

function AdminPage() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedProductId, setSelectedProductId] = useState(null);
    const [refreshToggle, setRefreshToggle] = useState(false);

    // Fetch products on mount and when refreshToggle changes
    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error fetching products:', error));
    }, [refreshToggle]);

    // Fetch categories on mount
    useEffect(() => {
        fetch('http://localhost:3000/categories')
            .then((res) => res.json())
            .then((data) => setCategories(data))
            .catch((error) =>
                console.error('Error fetching categories:', error)
            );
    }, []);

    // When a product is saved, refresh products list and clear selection
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
                {/* Products grouped by category */}
                <div style={{ flex: 1, maxHeight: '80vh', overflowY: 'auto' }}>
                    <h2>Products by Category</h2>
                    {categories.length === 0 && <p>Loading categories...</p>}
                    {categories.map((category) => (
                        <div key={category.id} style={{ marginBottom: '30px' }}>
                            <h3>{category.category_name}</h3>
                            <ul
                                style={{
                                    listStyleType: 'none',
                                    paddingLeft: 0
                                }}
                            >
                                {products.filter(
                                    (p) => p.category_id === category.id
                                ).length === 0 && (
                                    <li>
                                        <i>No products in this category</i>
                                    </li>
                                )}
                                {products
                                    .filter(
                                        (product) =>
                                            product.category_id === category.id
                                    )
                                    .map((product) => (
                                        <li
                                            key={product.id}
                                            style={{ marginBottom: '8px' }}
                                        >
                                            <button
                                                onClick={() =>
                                                    setSelectedProductId(
                                                        product.id
                                                    )
                                                }
                                                style={{
                                                    background: 'none',
                                                    border: 'none',
                                                    color: 'blue',
                                                    cursor: 'pointer',
                                                    textDecoration: 'underline',
                                                    padding: 0,
                                                    fontSize: '1rem'
                                                }}
                                            >
                                                {product.product_name}
                                            </button>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Product form */}
                <div style={{ flex: 1 }}>
                    <h2>
                        {selectedProductId ? 'Edit Product' : 'Add New Product'}
                    </h2>
                    <ProductForm
                        productId={selectedProductId}
                        onSaved={handleSaved}
                    />
                </div>
            </div>
        </div>
    );
}

export default AdminPage;
