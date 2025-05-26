const db = require('./database.sqlite');

// Categories
const categories = [
    'Roses',
    'Tulips',
    'Succulent',
    'Gift',
    'Plants',
    'Orchids'
];

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
    // Roses (category_id = 1)
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

    // Tulips (category_id = 2)
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

    // Succulents (category_id = 3)
    ['Aloe Vera', 'https://example.com/aloe.jpg', 89, 'green', 'low', 3],
    [
        'Echeveria',
        'https://example.com/echeveria.jpg',
        79,
        'blue-green',
        'low',
        3
    ],
    [
        'Hens and Chicks',
        'https://example.com/hensandchicks.jpg',
        69,
        'green',
        'low',
        3
    ],
    ['Zebra Plant', 'https://example.com/zebra.jpg', 99, 'green', 'low', 3],
    ['Jade Plant', 'https://example.com/jade.jpg', 109, 'green', 'low', 3],

    // Gifts (category_id = 4)
    [
        'Rose Gift Box',
        'https://example.com/rosegift.jpg',
        329,
        'red',
        'medium',
        4
    ],
    [
        'Succulent Gift Set',
        'https://example.com/succgift.jpg',
        199,
        'mixed',
        'low',
        4
    ],
    [
        'Orchid in Glass Dome',
        'https://example.com/orchidgift.jpg',
        359,
        'white',
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
        6
    ],
    [
        'Orchid Basket',
        'https://example.com/orchidbasket.jpg',
        299,
        'mixed',
        'medium',
        6
    ],
    [
        'Golden Orchid',
        'https://example.com/goldenorchid.jpg',
        289,
        'gold',
        'medium',
        6
    ],
    [
        'Orchid Trio',
        'https://example.com/orchidtrio.jpg',
        349,
        'mixed',
        'medium',
        6
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
            console.error('Error inserting product:', error.message);
        }
    });
});
productStmt.finalize(() => {
    console.log('All products inserted!');
});
