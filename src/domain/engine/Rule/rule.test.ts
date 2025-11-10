import { Rule } from './rule';

describe('Rule', () => {
  const rule = new Rule();

  it('should have correct constant values', () => {
    expect(rule.agesNumber).toBe(3);
    expect(rule.availableWonders).toBe(12);
    expect(rule.availablePerPlayer).toBe(4);
    expect(rule.maxUsed).toBe(7);
  });
});
