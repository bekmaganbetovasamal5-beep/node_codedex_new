const fs = require('fs');

// Delete the file if it exists
fs.unlink('shopping-list.txt', (err) => {
  if (err) {
    console.error('Error deleting file:', err);
    return;
  }
  console.log('sample.txt has been deleted.');
});