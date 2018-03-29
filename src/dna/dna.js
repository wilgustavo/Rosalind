
const countSymbols = (symbols, current) => {
  symbols[current] += 1;
  return symbols;
};

const dna = (linea) => {
  const symbols = { A: 0, C: 0, G: 0, T: 0};

  return linea
    .split('')
    .reduce(countSymbols, symbols);
};

module.exports = dna;