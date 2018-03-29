const fs = require('fs');
const dna = require('./dna');

const countingDNA = (fileName) => {
  if (!fileName) {
    return;
  }

  const readStream = fs.createReadStream(fileName, 'utf8');
  let data = '';
  
  readStream.on('data', chunck => {
    data += chunck;
  });  

  readStream.on('end', () => {
    const symbols = dna(data);
    console.log(`${symbols.A} ${symbols.C} ${symbols.G} ${symbols.T}`);
  });
};

countingDNA(process.argv[2]);
