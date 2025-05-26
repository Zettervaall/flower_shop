const db = require('./database.sqlite');

// Categories
const categories = ['Roses', 'Succulent', 'Gift', 'Plants', 'Orchids'];

// Insert categories
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

// Products
const products = [
    // Roses (category 1)
    [
        'Classic Red Roses',
        'https://example.com/redroses.jpg',
        199,
        'red',
        'medium',
        1
    ],
    [
        'White Rose Arrangement',
        'https://example.com/whiteroses.jpg',
        209,
        'white',
        'medium',
        1
    ],
    [
        'Pink Rose Bouquet',
        'https://example.com/pinkroses.jpg',
        189,
        'pink',
        'medium',
        1
    ],
    [
        'Yellow Roses',
        'https://example.com/yellowroses.jpg',
        179,
        'yellow',
        'medium',
        1
    ],
    [
        'Mini Rose Pot',
        'https://example.com/minirose.jpg',
        99,
        'red',
        'medium',
        1
    ],

    // Succulent (category  2)
    ['Red Tulips', 'https://example.com/redtulips.jpg', 129, 'red', 'low', 2],
    [
        'Yellow Tulips',
        'https://example.com/yellowtulips.jpg',
        139,
        'yellow',
        'low',
        2
    ],
    [
        'Mixed Tulips',
        'https://example.com/mixedtulips.jpg',
        149,
        'mixed',
        'low',
        2
    ],
    [
        'White Tulip Arrangement',
        'https://example.com/whitetulips.jpg',
        159,
        'white',
        'low',
        2
    ],
    [
        'Purple Tulips',
        'https://example.com/purpletulips.jpg',
        139,
        'purple',
        'low',
        2
    ],
    ['Aloe Vera', 'https://example.com/aloe.jpg', 89, 'green', 'low', 2],
    [
        'Echeveria',
        'https://example.com/echeveria.jpg',
        79,
        'blue-green',
        'low',
        2
    ],
    [
        'Hens and Chicks',
        'https://example.com/hensandchicks.jpg',
        69,
        'green',
        'low',
        2
    ],
    ['Zebra Plant', 'https://example.com/zebra.jpg', 99, 'green', 'low', 2],
    ['Jade Plant', 'https://example.com/jade.jpg', 109, 'green', 'low', 2],

    // Gift (category 3)
    [
        'Rose Gift Box',
        'https://example.com/rosegift.jpg',
        329,
        'red',
        'medium',
        3
    ],
    [
        'Succulent Gift Set',
        'https://example.com/succgift.jpg',
        199,
        'mixed',
        'low',
        3
    ],
    [
        'Orchid in Glass Dome',
        'https://example.com/orchidgift.jpg',
        359,
        'white',
        'medium',
        3
    ],
    [
        'Mini Plant Trio',
        'https://example.com/planttrio.jpg',
        189,
        'green',
        'low',
        3
    ],
    [
        'Flower & Chocolate Box',
        'https://example.com/flowerchoco.jpg',
        249,
        'mixed',
        'medium',
        3
    ],

    // Plants (category 4)
    [
        'Peace Lily',
        'https://example.com/peacelily.jpg',
        219,
        'white',
        'medium',
        4
    ],
    ['Areca Palm', 'https://example.com/palm.jpg', 259, 'green', 'high', 4],
    [
        'Snake Plant',
        'https://example.com/snakeplant.jpg',
        189,
        'green',
        'low',
        4
    ],
    [
        'Spider Plant',
        'https://example.com/spiderplant.jpg',
        129,
        'green-white',
        'medium',
        4
    ],
    ['ZZ Plant', 'https://example.com/zzplant.jpg', 149, 'green', 'low', 4],
    [
        'Rubber Plant',
        'https://example.com/rubberplant.jpg',
        189,
        'green',
        'medium',
        4
    ],
    ['Fiddle Leaf Fig', 'https://example.com/fig.jpg', 299, 'green', 'high', 4],

    // Orchids (category 5)
    [
        'White Orchid',
        'https://example.com/whiteorchid.jpg',
        219,
        'white',
        'medium',
        5
    ],
    [
        'Pink Orchid',
        'https://example.com/pinkorchid.jpg',
        229,
        'pink',
        'medium',
        5
    ],
    [
        'Blue Orchid',
        'https://example.com/blueorchid.jpg',
        249,
        'blue',
        'medium',
        5
    ],
    [
        'Mini Orchid',
        'https://example.com/miniorchid.jpg',
        199,
        'purple',
        'medium',
        5
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
