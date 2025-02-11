const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(cors({ origin: '*' }));
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Change if you have a different user
  password: 'dockeros', // Replace with your MySQL password
  database: 'portfolio_db'
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to MySQL');
  }
});


// API Route to Save Data
app.post('/api/contact', (req, res) => {
  const { name, email, phone } = req.body;

  console.log('Received data:', { name, email, phone }); // Log received data

  const query = 'INSERT INTO contacts (name, email, phone) VALUES (?, ?, ?)';
  db.query(query, [name, email, phone], (err, result) => {
    if (err) {
      console.error('Database error:', err); // Log database errors
      return res.status(500).json({ message: 'Error saving contact', error: err });
    }
    console.log('Contact saved successfully:', result); // Log success
    res.status(201).json({ message: 'Contact saved successfully!' });
  });
});



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
