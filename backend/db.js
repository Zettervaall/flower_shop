const sqlite3 = require('sqlite3').verbose();
const database = new sqlite3.Database('./backend/flowers.db');

database.serialize(() => {
    database.run(`
    CREATE TABLE IF NOT EXISTS categories (
      id INTEGER PRIMARY KEY,
      category_name TEXT NOT NULL
    )
  `);

    database.run(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY,
      product_name TEXT NOT NULL,
      image_url TEXT,
      price INTEGER,
      color TEXT,
      water_needs TEXT CHECK(water_needs IN ('low', 'medium', 'high')),
      category_id INTEGER,
      FOREIGN KEY (category_id) REFERENCES categories(id)
    )
  `);
});

module.exports = database;
