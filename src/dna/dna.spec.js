const assert = require('assert');
const dna = require('./dna');

describe('dna', () => {
  
  it('cadena vacía', () => {
    assert.deepEqual({ A: 0, C: 0, G: 0, T: 0}, dna(''));
  });

  it('faltan símbolos', () => {
    assert.deepEqual({ A: 1, C: 0, G: 1, T: 0}, dna('AG'));
  });

  it('símbolos repetidos', () => {
    assert.deepEqual({ A: 5, C: 5, G: 0, T: 0}, dna('AAAAACCCCC'));
  });

  it('prueba mas seria', () => {
    const dataset = 'AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC';
    assert.deepEqual({ A: 20, C: 12, G: 17, T: 21}, dna(dataset));
  });
  
});
