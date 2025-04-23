const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'media.json');

function checkAndCreateFile() {
  if (!fs.existsSync(filePath)) {
    const initialData = { media: [] };
    fs.writeFileSync(filePath, JSON.stringify(initialData, null, 2));
  }
}

function readData() {
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
}

function writeData(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

module.exports = { checkAndCreateFile, readData, writeData };
