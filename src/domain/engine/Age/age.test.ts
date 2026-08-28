import { Age } from './age';

describe('Age', () => {
  let age: Age;

  beforeEach(() => {
    age = new Age();
  });

  it('should be well implemented', () => {
    expect(age).toBeDefined();
    expect(age).toBeInstanceOf(Age);
  });
});
