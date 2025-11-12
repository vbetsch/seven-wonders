import { Rule } from './rule';

describe('Rule', () => {
  const playersNumber: number = 2;

  // Expected
  const agesNumberExpected: number = 3;
  const availableWondersTotalExpected: number = 12;
  const availableWondersPerPlayerExpected: number = 4;
  const maxUsedWondersTotalExpected: number = 7;

  // Tested
  const rule = new Rule();

  it('should have correct constant values', () => {
    expect(rule.agesNumber).toBe(agesNumberExpected);
    expect(rule.availableWondersTotal).toBe(availableWondersTotalExpected);
    expect(rule.availableWondersPerPlayer).toBe(
      availableWondersPerPlayerExpected
    );
    expect(rule.maxUsedWondersTotal).toBe(maxUsedWondersTotalExpected);
  });
  it('should remain only one wonder', () => {
    const wondersRemainingOnceMaximumReachedExpected: number = 1;
    expect(
      availableWondersPerPlayerExpected * playersNumber -
        maxUsedWondersTotalExpected
    ).toBe(wondersRemainingOnceMaximumReachedExpected);
  });
});
