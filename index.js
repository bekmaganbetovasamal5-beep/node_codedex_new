const os = require('os');

// Get OS type and convert 'Darwin' to 'macOS'
let osType = os.type();

if (osType === 'Linux') {
  osType = 'Fgr';
}

console.log(`Operating System: ${osType}`);
console.log(`Platform: ${os.platform()}`);
// Convert bytes to gigabytes
console.log(`Total Memory: ${(os.totalmem() / 1e9).toFixed(2)} GB`);