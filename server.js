const express = require('express');
const path = require('path');
const { checkAndCreateFile, readData, writeData } = require('./fileHandler');

const app = express();
const port = 3000;

app.use(express.json());
checkAndCreateFile();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/media', (req, res) => {
  const data = readData();
  res.json(data);
});

app.post('/media', (req, res) => {
  const newMedia = req.body;
  const data = readData();
  data.media.push(newMedia);
  writeData(data);
  res.json({ message: 'Media item added' });
});

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
