// server.js
const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
app.use(cors());
app.use(express.json());

// 1. INITIALIZE DATABASE FIRST
const db = new sqlite3.Database('./sunshine_daycare.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
    db.run(`
      CREATE TABLE IF NOT EXISTS inquiries (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        parent_name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        child_age TEXT,
        preferred_date TEXT,
        status TEXT DEFAULT 'Pending',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);
  }
});

// 2. DEFINE ROUTES (Now they can access 'db')

// POST: Add a new tour request
app.post('/api/tour-request', (req, res) => {
  const { parentName, email, phone, childAge, preferredDate } = req.body;
  
  if (!parentName || !email || !phone) {
    return res.status(400).json({ error: 'Name, email, and phone number are required.' });
  }

  const sql = `INSERT INTO inquiries (parent_name, email, phone, child_age, preferred_date) 
               VALUES (?, ?, ?, ?, ?)`;
  const params = [parentName, email, phone, childAge, preferredDate];

  db.run(sql, params, function(err) {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: 'Failed to save inquiry.' });
    }
    console.log(`Row inserted with rowid ${this.lastID}`);
    res.status(201).json({ message: 'Tour request saved successfully!' });
  });
});

// GET: View all inquiries
app.get('/api/inquiries', (req, res) => {
  const sql = `SELECT * FROM inquiries ORDER BY created_at DESC`;
  
  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ error: 'Failed to fetch inquiries.' });
    }
    res.status(200).json(rows);
  });
});

// 3. START SERVER
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Sunshine Learning backend running on port ${PORT}`);
});