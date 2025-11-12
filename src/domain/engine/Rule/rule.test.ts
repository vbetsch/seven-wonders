import { Rule } from './rule';

describe('Rule', () => {
  const rule = new Rule();

  it('should have correct constant values', () => {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    expect(rule.agesNumber).toBe(3);
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    expect(rule.availableWondersTotal).toBe(12);
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    expect(rule.availableWondersPerPlayer).toBe(4);
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    expect(rule.maxUsedWondersTotal).toBe(7);
  });
});
