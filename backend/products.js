
const db = require('./database');

//Raderar innehåll så det inte blir dubletter
db.run('DELETE FROM products');
db.run('DELETE FROM categories');


// Categories
const categories = ['Roses', 'Succulent', 'Gift', 'Orchids'];

// Inserting categories
const categoryStmt = db.prepare(
    `INSERT INTO categories (category_name) VALUES (?)`
);
categories.forEach((category) => {
    categoryStmt.run([category], (error) => {
        if (error) {
            console.error('Fel vid inläsning av kategori:', category, error.message);
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
        'https://example.com/gift2.jpg',
        219.0,
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
        'Aromatic Candle',
        'https://example.com/gift7.jpg',
        70.0,
        'various',
        'none',
        3
    ],
    [
        'Flower Pot Set',
        'https://example.com/gift8.jpg',
        150.0,
        'various',
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
        'https://example.com/orchid1.jpg',
        219.0,
        'white',
        'medium',
        6
    ],
    [
        'Pink Orchid',
        'https://example.com/orchid2.jpg',
        229.0,
        'pink',
        'medium',
        6
    ],
    [
        'Blue Orchid',
        'https://example.com/orchid3.jpg',
        249.0,
        'blue',
        'medium',
        6
    ],
    [
        'Mini Orchid',
        'https://example.com/orchid4.jpg',
        199.0,
        'purple',
        'medium',
        4
    ],
    [
        'Mini Plant Trio',
        'https://example.com/planttrio.jpg',
        189,
        'green',
        'low',
        4
    ],
    [
        'Flower & Chocolate Box',
        'https://example.com/flowerchoco.jpg',
        249,
        'mixed',
        'medium',
        4
    ],

    // Plants (category_id = 5)
    [
        'Double Stem Orchid',
        'https://example.com/orchid5.jpg',
        269.0,
        'white',
        'medium',
        4
    ],
    [
        'Orchid Basket',
        'https://example.com/orchid6.jpg',
        299.0,
        'mixed',
        'medium',
        4
    ],
    [
        'Golden Orchid',
        'https://example.com/orchid7.jpg',
        289.0,
        'gold',
        'medium',
        4
    ],
    [
        'Orchid Trio',
        'https://example.com/orchid8.jpg',
        349.0,
        'mixed',
        'medium',
        5
    ]
];

// Insert products
const productStmt = db.prepare(`
  INSERT INTO products (product_name, image_url, price, color, water_needs, category_id)
  VALUES (?, ?, ?, ?, ?, ?)
`);
products.forEach((product) => {
    productStmt.run(product, (error) => {
        if (error) {
            console.error('Fel vid inläsning av produkt:', product[0], error.message);
        }
    });
});
productStmt.finalize(() => {
    console.log('All products inserted!');
});
