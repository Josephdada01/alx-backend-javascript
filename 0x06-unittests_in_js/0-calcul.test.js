// a file that contains test cases of this function

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  describe('when given 1 and 3', () => {
    it('should return 4', () => {
      assert.equal(calculateNumber(1, 3), 4);
    });
  });
  describe('when given 1 and 3.7', () => {
    it('should return 5', () => {
      assert.equal(calculateNumber(1, 3.7), 5);
    });
  });
  describe('when given 1.2 and 3.7', () => {
    it('should return 5', () => {
      assert.equal(calculateNumber(1.2, 3.7), 5);
    });
  });
  describe('when given 1.5 and 3.7', () => {
    it('should return 6', () => {
      assert.equal(calculateNumber(1.5, 3.7), 6);
    });
  });
  describe('when given large numbers', () => {
    it('should return a large number', () => {
      assert.equal(calculateNumber(100000, 300000), 400000);
    });
  });
  describe('when given small numbers', () => {
    it('should return a small number', () => {
      assert.equal(calculateNumber(0.0001, 0.0003), 1);
    });
  });
  describe('when given negative numbers', () => {
    it('should return a negative number', () => {
      assert.equal(calculateNumber(-1, -3), -4);
    });
  });
  describe('when given decimal numbers', () => {
    it('should return a decimal number', () => {
      assert.equal(calculateNumber(1.5, 3.7), 6);
    });
  });
  describe('when given identical numbers', () => {
    it('should return the same number', () => {
      assert.equal(calculateNumber(4, 4), 8);
    });
  });  
});
