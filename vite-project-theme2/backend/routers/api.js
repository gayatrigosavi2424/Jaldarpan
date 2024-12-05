// routes/api.js
const express = require('express');
const router = express.Router();
const pool = require('../database'); // Import database connection

// Example route to fetch data from the database
router.get('/data', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM your_table'); // Replace with your query
    res.json(result.rows); // Send database result as JSON
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
