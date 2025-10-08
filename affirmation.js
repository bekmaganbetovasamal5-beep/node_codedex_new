const affirmations = [
  'This is gonna be your year!', 
  'You can absolutely climb that V4!',
  'Ты самый лучший',
  'Ты жопой нюхаешь цветы',
  'You are enough',
  'You are worthy of love and belonging',
  'You are resilient, strong, and brave, and you can’t be destroyed',
  'You have the power to create change',
   // …and so on
];
const path = require('path');
const os = require('os');
const fs = require('fs');
// Define the path to the desktop
const desktopPath = path.join(os.homedir(), 'Desktop');

// Function to get a random affirmation and save it to a file on the desktop
function saveRandomAffirmationToDesktop() {
  // Pick a random affirmation from the array
  const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];

  // Define the new file path on the desktop (this will overwrite the file each time)
  const newFilePath = path.join('daily-affirmations.txt');

   fs.writeFile(newFilePath, randomAffirmation, (err) => {
    if (err) {
      console.error('Error writing the affirmation to the file:', err);
    } else {
      console.log('Random affirmation saved to:', newFilePath);
    }
  });
}

// Call the function to get and save a random affirmation
saveRandomAffirmationToDesktop();