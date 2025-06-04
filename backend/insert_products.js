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
    ['Rose Bouquet', './assets/bukett1.jpg', 249.99, 'red', 'medium', 1],
    ['Cactus', './assets/kaktus1.jpg', 99.5, 'green', 'low', 4],
    ['Sunflower Pot', './assets/kruka1.jpg', 179.0, 'yellow', 'high', 3],
    ['Orchid Gift Box', './assets/kruka2.jpg', 329.0, 'purple', 'medium', 5],
    ['Peace Lily', './assets/kruka3.jpg', 219.0, 'white', 'medium', 5],
    ['Areca Palm', './assets/kruka4.jpg', 259, 'green', 'high', 5],
    ['Snake Plant', './assets/kruka5.jpg', 189, 'green', 'low', 5],

    ['Flower Pot Set', './assets/kruka2.jpg', 150.0, 'various', 'medium', 5],
    ['ZZ Plant', './assets/bukett2.jpg', 149, 'green', 'low', 5],
    ['Rubber Plant', './assets/bukett3.jpg', 189, 'green', 'medium', 5],
    ['Fiddle Leaf Fig', './assets/bukett4.jpg', 299, 'green', 'high', 5],

    ['White Orchid', './assets/bukett5.jpg', 219.0, 'white', 'medium', 4],
    ['Pink Orchid', './assets/bukett6.jpg', 229.0, 'pink', 'medium', 6],
    ['Blue Orchid', './assets/bukett7.jpg', 249.0, 'blue', 'medium', 6],
    ['Mini Orchid', './assets/bukett2.jpg', 199.0, 'purple', 'medium', 4],
    ['Mini Plant Trio', './assets/kruka4.jpg', 189, 'green', 'low', 4],

    ['Double Stem Orchid', './assets/bukett1.jpg', 269.0, 'white', 'medium', 4],
    ['Orchid Basket', './assets/bukett5.jpg', 299.0, 'mixed', 'medium', 4],
    ['Golden Orchid', './assets/kruka2.jpg', 289.0, 'gold', 'medium', 4],
    ['Orchid Trio', './assets/bukett7.jpg', 349.0, 'mixed', 'medium', 5]
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
