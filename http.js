const http = require('http');


const server = http.createServer((request, response) => {
 response.writeHead (200, { 'Content-Type': 'text/plain; charset=utf-8' });
 response.write('Welcome to Neon Noodles! \n');
response.write('==============\n');
response.write('LATE NITE MENU\n');
response.write('==============\n');
response.write('RAMEN \n');
response.write('1. Quantum Truffle Ramen \n');
response.write('EXTRA TOPPINGS \n');
response.end();

});

// Вызов listen должен быть вне функции createServer!
server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});