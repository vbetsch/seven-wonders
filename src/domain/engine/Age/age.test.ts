import {Age} from './age';

describe('Age', () => {
  let age: Age;

  beforeEach(() => {
    age = new Age(1);
  });

  it('should be well implemented', () => {
    expect(age).toBeDefined();
    expect(age).toBeInstanceOf(Age);
  });

  it('should have an identifier', () => {
    expect(age.identifier).toBeDefined();
    expect(age.identifier).toBe(1);
  })
});
