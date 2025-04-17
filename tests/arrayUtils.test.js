import { expect } from 'chai';
import { findMax, findMin, removeDuplicates } from '../utils/arrayUtils.js';

describe('arrayUtils', () => {
  describe('findMax', () => {
    it('returns max value', () => {
      expect(findMax([1, 5, 3])).to.equal(5);
    });

    it('throws error if input is not array', () => {
      expect(() => findMax('hello')).to.throw('Input must be an array');
    });
  });

  describe('findMin', () => {
    it('returns min value', () => {
      expect(findMin([1, 5, 3])).to.equal(1);
    });

    it('throws error if input is not array', () => {
      expect(() => findMin(null)).to.throw('Input must be an array');
    });
  });

  describe('removeDuplicates', () => {
    it('removes duplicates', () => {
      expect(removeDuplicates([1, 2, 2, 3])).to.deep.equal([1, 2, 3]);
    });

    it('returns same array if no duplicates', () => {
      expect(removeDuplicates([1, 2, 3])).to.deep.equal([1, 2, 3]);
    });

    it('throws error if input is not array', () => {
      expect(() => removeDuplicates(123)).to.throw('Input must be an array');
    });
  });
});
