const db = require('./db');

// Categories
const categories = ['Roses', 'Indoor', 'Outdoor', 'Succulent', 'Gift'];

// Inserting categories
const categoryStmt = db.prepare(
    `INSERT INTO categories (category_name) VALUES (?)`
);
categories.forEach((category) => {
    categoryStmt.run([category], (error) => {
        if (error) {
            console.error('Error inserting category:', error.message);
        }
    });
});
categoryStmt.finalize(() => {
    console.log('All categories inserted!');
});

// Products data
const products = [
    [
        'Rose Bouquet',
        'https://example.com/rose.jpg',
        249.99,
        'red',
        'medium',
        1
    ],
    ['Cactus', 'https://example.com/cactus.jpg', 99.5, 'green', 'low', 4],
    [
        'Sunflower Pot',
        'https://example.com/sunflower.jpg',
        179.0,
        'yellow',
        'high',
        3
    ],
    [
        'Orchid Gift Box',
        'https://example.com/orchid.jpg',
        329.0,
        'purple',
        'medium',
        5
    ],
    [
        'Peace Lily',
        'https://example.com/peacelily.jpg',
        219.5,
        'white',
        'medium',
        2
    ]
];

// Inserting products
const productStmt = db.prepare(`
  INSERT INTO products (product_name, image_url, price, color, water_needs, category_id)
  VALUES (?, ?, ?, ?, ?, ?)
`);
products.forEach((product) => {
    productStmt.run(product, (error) => {
        if (error) {
            console.error('Error inserting product:', error.message);
        }
    });
});
productStmt.finalize(() => {
    console.log('All products inserted!');
});
