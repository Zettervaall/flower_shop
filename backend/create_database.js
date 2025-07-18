const sqlite3 = require('sqlite3').verbose();
const database = new sqlite3.Database('./flowers.sqlite');

database.serialize(() => {
    database.run(`
    CREATE TABLE IF NOT EXISTS categories (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      category_name TEXT NOT NULL UNIQUE
    )
  `);

    database.run(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      product_name TEXT NOT NULL,
      image_url TEXT,
      price REAL,
      color TEXT,
      water_needs TEXT CHECK(water_needs IN ('low', 'medium', 'high')),
      category_id INTEGER,
      FOREIGN KEY (category_id) REFERENCES categories(id)
    )
  `);
});

module.exports = database;
