import React, { useState, useEffect } from 'react';

function ProductForm({ productId, onSaved }) {
    const [form, setForm] = useState({
        product_name: '',
        image_url: '',
        price: '',
        color: '',
        water_needs: '',
        category_id: ''
    });

    // If productId exists, fetch the product and fill in the form
    useEffect(() => {
        if (productId) {
            fetch(`http://localhost:3000/product/${productId}`)
                .then((response) => response.json())
                .then((data) => setForm(data))
                .catch((error) => {
                    console.error('Error fetching product:', error);
                });
        }
    }, [productId]);

    function handleChange(event) {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        setForm((previousForm) => ({
            ...previousForm,
            [fieldName]: fieldValue
        }));
    }

    // Form submission
    function handleSubmit(event) {
        event.preventDefault();

        const httpMethod = productId ? 'PUT' : 'POST';
        const url = productId
            ? `http://localhost:3000/product/${productId}`
            : 'http://localhost:3000/product';

        fetch(url, {
            method: httpMethod,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form)
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Something went wrong');
                }
                return response.json();
            })
            .then(() => {
                alert('Product saved successfully!');
                if (onSaved) {
                    onSaved();
                }
            })
            .catch((error) => {
                alert(error.message);
            });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="product_name"
                value={form.product_name}
                onChange={handleChange}
                placeholder="Product Name"
                required
            />
            <input
                name="image_url"
                value={form.image_url}
                onChange={handleChange}
                placeholder="Image URL"
                required
            />
            <input
                name="price"
                type="number"
                value={form.price}
                onChange={handleChange}
                placeholder="Price"
                required
            />
            <input
                name="color"
                value={form.color}
                onChange={handleChange}
                placeholder="Color"
            />
            <input
                name="water_needs"
                value={form.water_needs}
                onChange={handleChange}
                placeholder="Water Needs"
            />
            <input
                name="category_id"
                type="number"
                value={form.category_id}
                onChange={handleChange}
                placeholder="Category ID"
                required
            />
            <button type="submit">Save Product</button>
        </form>
    );
}

export default ProductForm;
