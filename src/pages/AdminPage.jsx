import React, { useState, useEffect } from 'react';
import ProductForm from '../components/ProductForm';
import './AdminPage.css';
import Footer from '../components/Footer';

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
        <>
            <div className="admin-page">
                <h1>Admin Page</h1>

                <div className="admin-content">
                    <div className="product-form-container">
                        <h2>
                            {selectedProductId
                                ? 'Edit Product'
                                : 'Add New Product'}
                        </h2>
                        <ProductForm
                            productId={selectedProductId}
                            onSaved={handleSaved}
                            categories={categories}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default AdminPage;
