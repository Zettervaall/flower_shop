import React, { useState, useEffect } from 'react';
import ProductForm from '../components/ProductForm';

function AdminPage() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedProductId, setSelectedProductId] = useState(null);
    const [refreshToggle, setRefreshToggle] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error fetching products:', error));
    }, [refreshToggle]);

    useEffect(() => {
        fetch('http://localhost:3000/categories')
            .then((res) => res.json())
            .then((data) => setCategories(data))
            .catch((error) =>
                console.error('Error fetching categories:', error)
            );
    }, []);

    function handleSaved() {
        setRefreshToggle(!refreshToggle);
        setSelectedProductId(null);
    }

    return (
        <div className="admin-page">
            <h1>Admin Page</h1>

            <button
                className="add-new-product-button"
                onClick={() => setSelectedProductId(null)}
            >
                Add New Product
            </button>

            <div className="admin-content">
                <div className="product-form-container">
                    <h2>
                        {selectedProductId ? 'Edit Product' : 'Add New Product'}
                    </h2>
                    <ProductForm
                        productId={selectedProductId}
                        onSaved={handleSaved}
                    />
                </div>
            </div>

            <div className="product-list">
                <h2>Products by Category</h2>
                {categories.length === 0 && <p>Loading categories...</p>}
                {categories.map((category) => (
                    <div key={category.id} className="category-group">
                        <h3>{category.category_name}</h3>
                        <ul className="product-items">
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
                                    <li key={product.id}>
                                        <button
                                            className="product-name-button"
                                            onClick={() =>
                                                setSelectedProductId(product.id)
                                            }
                                        >
                                            {product.product_name}
                                        </button>
                                    </li>
                                ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AdminPage;
