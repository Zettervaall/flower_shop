const db = require('./db');

// Categories
const categories = ['Roses', 'Succulent', 'Gift', 'Orchids'];

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
        219,
        'white',
        'medium',
        5
    ],
    ['Areca Palm', 'https://example.com/palm.jpg', 259, 'green', 'high', 5],
    [
        'Snake Plant',
        'https://example.com/snakeplant.jpg',
        189,
        'green',
        'low',
        5
    ],
    [
        'Spider Plant',
        'https://example.com/spiderplant.jpg',
        129,
        'green-white',
        'medium',
        5
    ],
    ['ZZ Plant', 'https://example.com/zzplant.jpg', 149, 'green', 'low', 5],
    [
        'Rubber Plant',
        'https://example.com/rubberplant.jpg',
        189,
        'green',
        'medium',
        5
    ],
    ['Fiddle Leaf Fig', 'https://example.com/fig.jpg', 299, 'green', 'high', 5],

    // Orchids (category_id = 6)
    [
        'White Orchid',
        'https://example.com/whiteorchid.jpg',
        219,
        'white',
        'medium',
        6
    ],
    [
        'Pink Orchid',
        'https://example.com/pinkorchid.jpg',
        229,
        'pink',
        'medium',
        6
    ],
    [
        'Blue Orchid',
        'https://example.com/blueorchid.jpg',
        249,
        'blue',
        'medium',
        6
    ],
    [
        'Mini Orchid',
        'https://example.com/miniorchid.jpg',
        199,
        'purple',
        'medium',
        6
    ],
    [
        'Double Stem Orchid',
        'https://example.com/doublestem.jpg',
        269,
        'white',
        'medium',
        5
    ],
    [
        'Orchid Basket',
        'https://example.com/orchidbasket.jpg',
        299,
        'mixed',
        'medium',
        5
    ],
    [
        'Golden Orchid',
        'https://example.com/goldenorchid.jpg',
        289,
        'gold',
        'medium',
        5
    ],
    [
        'Orchid Trio',
        'https://example.com/orchidtrio.jpg',
        349,
        'mixed',
        'medium',
        5
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
