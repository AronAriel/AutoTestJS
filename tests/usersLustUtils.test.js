import { expect } from 'chai';
import {
  filterUsersByAge,
  sortUsersByName,
  findUserById,
  isEmailTaken,
} from '../utils/usersListUtils.js';

describe('usersListUtils', () => {
  const users = [
    { id: 1, name: 'Anna', age: 25, email: 'anna@example.com' },
    { id: 2, name: 'John', age: 30, email: 'john@example.com' },
    { id: 3, name: 'Bella', age: 20, email: 'bella@example.com' },
  ];

  describe('filterUsersByAge', () => {
    it('filters users within age range', () => {
      const result = filterUsersByAge(users, 21, 30);
      expect(result).to.deep.equal([
        { id: 1, name: 'Anna', age: 25, email: 'anna@example.com' },
        { id: 2, name: 'John', age: 30, email: 'john@example.com' },
      ]);
    });

    it('throws error if input is not array', () => {
      expect(() => filterUsersByAge('not array', 20, 30)).to.throw('Users must be an array');
    });
  });

  describe('sortUsersByName', () => {
    it('sorts users alphabetically by name', () => {
      const sorted = sortUsersByName(users);
      expect(sorted.map(u => u.name)).to.deep.equal(['Anna', 'Bella', 'John']);
    });

    it('throws error if input is not array', () => {
      expect(() => sortUsersByName(null)).to.throw('Users must be an array');
    });
  });

  describe('findUserById', () => {
    it('returns correct user by id', () => {
      expect(findUserById(users, 2)).to.deep.equal(users[1]);
    });

    it('returns null if user not found', () => {
      expect(findUserById(users, 99)).to.be.null;
    });

    it('throws error if input is not array', () => {
      expect(() => findUserById('wrong', 2)).to.throw('Users must be an array');
    });
  });

  describe('isEmailTaken', () => {
    it('returns true if email exists', () => {
      expect(isEmailTaken(users, 'john@example.com')).to.be.true;
    });

    it('returns false if email does not exist', () => {
      expect(isEmailTaken(users, 'notfound@example.com')).to.be.false;
    });

    it('throws error if input is not array', () => {
      expect(() => isEmailTaken({}, 'test@test.com')).to.throw('Users must be an array');
    });
  });
});
