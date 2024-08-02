const fs = require('fs');
const path = require('path');

// Define paths
const distDir = path.resolve(__dirname, 'dist');
const indexFile = path.join(distDir, 'index.html');
const errorFile = path.join(distDir, '404.html');

// Copy index.html to 404.html
fs.copyFile(indexFile, errorFile, (err) => {
  if (err) {
    console.error('Error copying index.html to 404.html:', err);
  } else {
    console.log('Successfully copied index.html to 404.html');
  }
});