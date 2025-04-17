import { expect } from 'chai';
import { checkStudentKnowledge } from '../utils/studentKnowledgeCheckerUtil.js';

describe('checkStudentKnowledge', () => {
  it('returns true for all correct answers', () => {
    const student = { q1: 'a', q2: 'b' };
    const correct = { q1: 'a', q2: 'b' };
    expect(checkStudentKnowledge(student, correct)).to.be.true;
  });

  it('returns false if answers are incorrect', () => {
    const student = { q1: 'a', q2: 'c' };
    const correct = { q1: 'a', q2: 'b' };
    expect(checkStudentKnowledge(student, correct)).to.be.false;
  });

  it('returns false if keys do not match', () => {
    const student = { q1: 'a', q3: 'b' };
    const correct = { q1: 'a', q2: 'b' };
    expect(checkStudentKnowledge(student, correct)).to.be.false;
  });

  it('returns false if lengths of keys differ', () => {
    const student = { q1: 'a' };
    const correct = { q1: 'a', q2: 'b' };
    expect(checkStudentKnowledge(student, correct)).to.be.false;
  });
});
