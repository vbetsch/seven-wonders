import { Rule } from './rule';

describe('Rule', () => {
  const rule = new Rule();

  it('should have correct constant values', () => {
    expect(rule.agesNumber).toBe(3);
    expect(rule.availableWondersTotal).toBe(12);
    expect(rule.availableWondersPerPlayer).toBe(4);
    expect(rule.maxUsedWondersTotal).toBe(7);
  });
});
