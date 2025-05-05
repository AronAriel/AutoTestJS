import { expect } from 'chai';
import { add, subtract, multiply, divide } from '../utils/mathUtils.js';

describe('mathUtils', () => {
  describe('add', () => {
    it('adds two numbers', () => {
      expect(add(2, 3)).to.equal(5);
    });
  });

  describe('subtract', () => {
    it('subtracts second number from first', () => {
      expect(subtract(5, 2)).to.equal(3);
    });
  });

  describe('multiply', () => {
    it('multiplies two numbers', () => {
      expect(multiply(3, 4)).to.equal(12);
    });
  });

  describe('divide', () => {
    it('divides first number by second', () => {
      expect(divide(10, 2)).to.equal(5);
    });

    it('throws error on division by zero', () => {
      expect(() => divide(10, 0)).to.throw('Cannot divide by zero');
    });
  });
});
