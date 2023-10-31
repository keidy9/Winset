const express = require('express');
const path = require('path');

// Server setup
const app = express();
const PORT = 3000;

// Parsing logic
app.use(express.json());
app.use(express.urlencoded());

// FACT: 99% of gamblers quit right before they hit it big
app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

module.exports = app;
