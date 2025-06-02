import React, { useState, useEffect } from 'react';

function ProductForm({ productId, onSaved, categories }) {
    const [form, setForm] = useState({
        product_name: '',
        image_url: '',
        price: '',
        color: '',
        water_needs: '',
        category_id: ''
    });

    // Store error messages for each field
    const [errors, setErrors] = useState({});

    // Success message
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        if (productId) {
            fetch(`http://localhost:3000/products/${productId}`)
                .then((response) => response.json())
                .then((data) => setForm(data))
                .catch((error) => {
                    setErrors({ general: 'Error fetching product data.' });
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

        // Clear error for this field on change
        setErrors((prevErrors) => ({
            ...prevErrors,
            [fieldName]: '',
            general: ''
        }));

        // Clear success message on any change
        setSuccessMessage('');
    }

    function handleSubmit(event) {
        event.preventDefault();

        // Clear previous errors and messages
        setErrors({});
        setSuccessMessage('');

        const httpMethod = productId ? 'PUT' : 'POST';
        const url = productId
            ? `http://localhost:3000/products/${productId}`
            : 'http://localhost:3000/products';

        fetch(url, {
            method: httpMethod,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form)
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        'Something went wrong while saving the product.'
                    );
                }
                return response.json();
            })
            .then(() => {
                setSuccessMessage('Product saved successfully!');
                setForm({
                    product_name: '',
                    image_url: '',
                    price: '',
                    color: '',
                    water_needs: '',
                    category_id: ''
                });
                if (onSaved) {
                    onSaved();
                }
            })
            .catch((error) => {
                setErrors({
                    general: error.message || 'Unknown error occurred'
                });
            });
    }

    // Input fields
    return (
        <form onSubmit={handleSubmit} noValidate>
            <div>
                <input
                    name="product_name"
                    value={form.product_name}
                    onChange={handleChange}
                    placeholder="Product Name"
                    required
                />
                {errors.product_name && (
                    <div style={{ color: 'red' }}>{errors.product_name}</div>
                )}
            </div>

            <div>
                <input
                    name="image_url"
                    value={form.image_url}
                    onChange={handleChange}
                    placeholder="Image URL"
                    required
                />
                {errors.image_url && (
                    <div style={{ color: 'red' }}>{errors.image_url}</div>
                )}
            </div>

            <div>
                <input
                    name="price"
                    type="number"
                    value={form.price}
                    onChange={handleChange}
                    placeholder="Price"
                    required
                />
                {errors.price && (
                    <div style={{ color: 'red' }}>{errors.price}</div>
                )}
            </div>

            <div>
                <input
                    name="color"
                    value={form.color}
                    onChange={handleChange}
                    placeholder="Color"
                />
                {errors.color && (
                    <div style={{ color: 'red' }}>{errors.color}</div>
                )}
            </div>

            <div>
                <label className='water-needs-label'>Water Needs:</label>
                <div className="radio-options">
                    {['low', 'medium', 'high'].map((level) => (
                        <label key={level} className="radio-label">
                            <input
                                type="radio"
                                name="water_needs"
                                value={level}
                                checked={form.water_needs === level}
                                onChange={handleChange}
                            />
                            <span>{level}</span>
                        </label>
                    ))}
                </div>
                {errors.water_needs && (
                    <div style={{ color: 'red' }}>{errors.water_needs}</div>
                )}
            </div>

            <div>
                <label>Category:</label>
                <select
                    name="category_id"
                    value={form.category_id}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select category</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.category_name}
                        </option>
                    ))}
                </select>
                {errors.category_id && (
                    <div style={{ color: 'red' }}>{errors.category_id}</div>
                )}
            </div>

            <button type="submit">Add new product</button>

            {/* General error message */}
            {errors.general && (
                <div style={{ color: 'red', marginTop: '10px' }}>
                    {errors.general}
                </div>
            )}

            {/* Success message */}
            {successMessage && (
                <div style={{ color: 'green', marginTop: '10px' }}>
                    {successMessage}
                </div>
            )}
        </form>
    );
}

export default ProductForm;
