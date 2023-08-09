const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3010;

app.use(cors());

app.get('/api/employees', (req, res) => {
  console.log('Received API request');
  res.json({ message: 'API response from server' });
});

app.listen(PORT, () => {
  console.log(`Backend API listening on port ${PORT}`);
});