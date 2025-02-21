const sharp = require('sharp');
const path = require('path');

const inputImage = path.join(__dirname, '../src/assets/images/AI Bot For PodCastBots No Background Transparent.png');
const outputSmall = path.join(__dirname, '../src/assets/images/robot-small.webp');
const outputLarge = path.join(__dirname, '../src/assets/images/robot-large.webp');

// Create small version (200px)
sharp(inputImage)
  .resize(200, null, {
    withoutEnlargement: true,
    fit: 'contain'
  })
  .webp({ quality: 80 })
  .toFile(outputSmall)
  .then(() => console.log('Small image created'))
  .catch(err => console.error('Error creating small image:', err));

// Create large version (400px)
sharp(inputImage)
  .resize(400, null, {
    withoutEnlargement: true,
    fit: 'contain'
  })
  .webp({ quality: 80 })
  .toFile(outputLarge)
  .then(() => console.log('Large image created'))
  .catch(err => console.error('Error creating large image:', err));
