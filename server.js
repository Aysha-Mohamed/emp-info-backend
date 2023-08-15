const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3010;
const apiKey = process.env.API_KEY;

app.use(cors());

app.get('/api/employees', async (req, res) => {
    console.log('Received API request');
  
    try {
      const url = 'https://api.1337co.de/v3/employees';
      const headers = {
        Authorization: apiKey
    };
  
      const response = await fetch(url, { headers });
      if (response.ok) {
        const data = await response.json();
        res.status(200).json(data);
      } else {
        console.log('Error fetching data from external API:', response.statusText);
        res.status(500).json({ error: 'An error occurred while fetching data' });
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'An error occurred while fetching data' });
    }
  });

app.listen(PORT, () => {
  console.log(`Backend API listening on port ${PORT}`);
});