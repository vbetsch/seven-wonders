import 'reflect-metadata';
import { Rules } from './rules';
import { container } from 'tsyringe';

describe('Rules', () => {
  const playersNumber: number = 2;

  // Expected
  const agesNumberExpected: number = 3;
  const availableWondersTotalExpected: number = 12;
  const availableWondersPerPlayerExpected: number = 4;
  const maxUsedWondersTotalExpected: number = 7;

  // Tested
  const rules: Rules = container.resolve(Rules);

  it('should have correct constant values', () => {
    expect(rules.agesNumber).toBe(agesNumberExpected);
    expect(rules.availableWondersTotal).toBe(availableWondersTotalExpected);
    expect(rules.availableWondersPerPlayer).toBe(
      availableWondersPerPlayerExpected
    );
    expect(rules.maxUsedWondersTotal).toBe(maxUsedWondersTotalExpected);
  });
  it('should remain only one wonder', () => {
    const wondersRemainingOnceMaximumReachedExpected: number = 1;
    expect(
      rules.availableWondersPerPlayer * playersNumber -
        rules.maxUsedWondersTotal
    ).toBe(wondersRemainingOnceMaximumReachedExpected);
  });
});
