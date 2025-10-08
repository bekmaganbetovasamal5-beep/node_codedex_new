const fs = require('fs');

const message = `Hey My name is Aman. Today is 28 September 2025.
The weather is cold. I am felling cool;`
 
fs.writeFile('hello.txt', message, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('File written successfully!');
  }
});