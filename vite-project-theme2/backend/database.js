// database.js
const { Pool } = require('pg');
require('dotenv').config(); // Load environment variables from .env file

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // PostgreSQL connection string (from .env)
});

module.exports = pool;
