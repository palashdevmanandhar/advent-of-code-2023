const fs = require('fs');

// Replace 'your-file.txt' with the path to your actual text file
const filePath = '../puzzelInputs/one.txt';

// Read the file asynchronously and return a Promise
const reader = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading the file:', err);
        reject(err);
        return;
      }

      const lines = data.split('\n');
      const puzzelData = lines.filter(line => line.trim() !== '');

      // Resolve the Promise with the array of lines
      resolve(puzzelData);
    });
  });
}

// Call the reader function and use .then() to log the result
reader()
  .then(Puzzel => {
    console.log("puzzel data", Puzzel);
  })
  .catch(error => {
    console.error("Error:", error);
  });


