const path = require('path');

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = 8001;

app.get('/api/profiles', (req, res) => {
  res.sendFile(path.join(__dirname, 'data', 'profiles.json'));
});

app.listen(port, () => {
  console.log(`[profiles] API listening on port ${port}.`);
});
