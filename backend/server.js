const express = require('express');
const cors = require('cors');
const db = require('./database');

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

// startar servern
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`✅ Servern är redo på http://localhost:${PORT}`);
});
