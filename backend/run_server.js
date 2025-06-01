const express = require('express');
const cors = require('cors');
const db = require('./create_database');

const app = express();
app.use(cors()); // tillåter frontend att anropa API:t
app.use(express.json()); // gör att vi kan ta emot JSON-data i POST

// hämta alla produker

app.get('/', (req, res) => {
    res.send('Välkommen till Flowershop API!');
});

app.get('/products', (req, res) => {
    db.all('SELECT * FROM products', (err, rows) => {
        if (err) {
            console.error('Fel vid hämtning:', err.message);
            return res
                .status(500)
                .json({ error: 'Något gick fel med databasen.' });
        }
        res.json(rows); // skickar tillbaka produkterna som JSON
    });
});

// hämta alla kategorier
app.get('/categories', (req, res) => {
    db.all('SELECT * FROM categories', (err, rows) => {
        if (err) {
            console.error('Fel vid hämtning av kategorier:', err.message);
            return res
                .status(500)
                .json({ error: 'Kunde inte hämta kategorier.' });
        }
        res.json(rows);
    });
});

app.get('/product/:productId', (req, res) => {
    db.get(
        'SELECT * FROM products WHERE id = ?',
        req.params.productId,
        (err, rows) => {
            if (err) {
                console.error('Fel vid hämtning:', err.message);
                return res
                    .status(500)
                    .json({ error: 'Något gick fel med databasen.' });
            }
            res.json(rows);
        }
    );
});

app.post('/product', (req, res) => {
    const { product_name, image_url, price, color, water_needs, category_id } =
        req.body;

    const productStmt = db.prepare(`
  INSERT INTO products (product_name, image_url, price, color, water_needs, category_id)
  VALUES (?, ?, ?, ?, ?, ?)
`);

    productStmt.run(
        product_name,
        image_url,
        price,
        color,
        water_needs,
        category_id,
        (error) => {
            if (error) {
                console.error(
                    'Fel vid inläsning av produkt:',
                    product[0],
                    error.message
                );
            }
        }
    );
    productStmt.finalize(() => {
        console.log('Product inserted!');
    });
    res.status(200).send('');
});

app.put('/product/:productId', (req, res) => {
    const { product_name, image_url, price, color, water_needs, category_id } =
        req.body;

    const productStmt = db.prepare(`
UPDATE products
SET product_name = ?,
    image_url = ?,
    price = ?,
    color = ?,
    water_needs = ?,
    category_id = ?
WHERE id = ?;
`);

    productStmt.run(
        product_name,
        image_url,
        price,
        color,
        water_needs,
        category_id,
        req.params.productId,
        (error) => {
            if (error) {
                console.error(
                    'Fel vid inläsning av produkt:',
                    product[0],
                    error.message
                );
            }
        }
    );
    productStmt.finalize(() => {
        console.log('Product updated!');
    });
    res.status(200).send('');
});

// startar servern
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`✅ Servern är redo på http://localhost:${PORT}`);
});
