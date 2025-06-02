const db = require('./create_database');

//Raderar innehåll så det inte blir dubletter
db.run('DELETE FROM products');
db.run('DELETE FROM categories');

// Categories
const categories = ['Roses', 'Succulent', 'Gift', 'Orchids', 'Plant'];

// Inserting categories
const categoryStmt = db.prepare(
    `INSERT INTO categories (category_name) VALUES (?)`
);
categories.forEach((category) => {
    categoryStmt.run([category], (error) => {
        if (error) {
            console.error(
                'Fel vid inläsning av kategori:',
                category,
                error.message
            );
        }
    });
});
categoryStmt.finalize(() => {
    console.log('All categories inserted!');
});

// Products data
const products = [
    ['Rose Bouquet', './assets/bridal-bouquet.png', 249.99, 'red', 'medium', 1],
    ['Cactus', './assets/bridal-bouquet.png', 99.5, 'green', 'low', 4],
    ['Sunflower Pot', './assets/poppy_orange.png', 179.0, 'yellow', 'high', 3],
    [
        'Orchid Gift Box',
        './assets/bridal-bouquet.png',
        329.0,
        'purple',
        'medium',
        5
    ],
    ['Peace Lily', './assets/poppy_orange.png', 219.0, 'white', 'medium', 5],
    ['Areca Palm', './assets/poppy_orange.png', 259, 'green', 'high', 5],
    ['Snake Plant', './assets/poppy_orange.png', 189, 'green', 'low', 5],

    [
        'Flower Pot Set',
        './assets/poppy_orange.png',
        150.0,
        'various',
        'medium',
        5
    ],
    ['ZZ Plant', './assets/bridal-bouquet.png', 149, 'green', 'low', 5],
    ['Rubber Plant', './assets/bridal-bouquet.png', 189, 'green', 'medium', 5],
    ['Fiddle Leaf Fig', './assets/bridal-bouquet.png', 299, 'green', 'high', 5],

    [
        'White Orchid',
        './assets/bridal-bouquet.png',
        219.0,
        'white',
        'medium',
        4
    ],
    ['Pink Orchid', './assets/poppy_orange.png', 229.0, 'pink', 'medium', 6],
    ['Blue Orchid', './assets/poppy_orange.png', 249.0, 'blue', 'medium', 6],
    [
        'Mini Orchid',
        './assets/bridal-bouquet.png',
        199.0,
        'purple',
        'medium',
        4
    ],
    ['Mini Plant Trio', './assets/poppy_orange.png', 189, 'green', 'low', 4],
    [
        'Flower & Chocolate Box',
        './assets/poppy_orange.png',
        249,
        'mixed',
        'medium',
        4
    ],

    // Plants (category_id = 5)
    [
        'Double Stem Orchid',
        './assets/bridal-bouquet.png',
        269.0,
        'white',
        'medium',
        4
    ],
    [
        'Orchid Basket',
        './assets/bridal-bouquet.png',
        299.0,
        'mixed',
        'medium',
        4
    ],
    [
        'Golden Orchid',
        './assets/bridal-bouquet.png',
        289.0,
        'gold',
        'medium',
        4
    ],
    ['Orchid Trio', './assets/poppy_orange.png', 349.0, 'mixed', 'medium', 5]
];

// Insert products
const productStmt = db.prepare(`
  INSERT INTO products (product_name, image_url, price, color, water_needs, category_id)
  VALUES (?, ?, ?, ?, ?, ?)
`);
products.forEach((product) => {
    productStmt.run(product, (error) => {
        if (error) {
            console.error(
                'Fel vid inläsning av produkt:',
                product[0],
                error.message
            );
        }
    });
});
productStmt.finalize(() => {
    console.log('All products inserted!');
});
