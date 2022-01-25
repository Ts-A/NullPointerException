// Configuration Imports
require('dotenv').config();
require('module-alias/register');
require('@config/dbconfig.js');

// 3rd party Package Imports
const express = require('express');
const morgan = require('morgan');

// Custom module imports
const api = require('./api');

// Global Access variables
const { PORT } = process.env;
const app = express();
app.use(express.json()); // Accept incoming json requests
app.use(morgan('combined')); // For logging

app.get('/', (req, res) => res.redirect('/ping'));

app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong!' });
});

app.use('/api', api);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
