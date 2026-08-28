import 'reflect-metadata';
import { Rules } from './rules';
import { container } from 'tsyringe';

describe('Rules', () => {
  let rules: Rules;

  // Expected
  const playersNumberExpected: number = 2;
  const agesNumberExpected: number = 3;
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  const agesCardsNumberExpected: number[] = [42, 38, 54];
  const availableWondersTotalExpected: number = 12;
  const availableWondersPerPlayerExpected: number = 4;
  const maxUsedWondersTotalExpected: number = 7;

  beforeEach(() => {
    rules = container.resolve(Rules);
  });

  afterEach(() => {
    container.clearInstances();
  });

  it('should have correct constant values', () => {
    expect(rules.playersNumber).toBe(playersNumberExpected);
    expect(rules.agesNumber).toBe(agesNumberExpected);
    expect(rules.agesCardsNumber).toStrictEqual(agesCardsNumberExpected);
    expect(rules.availableWondersTotal).toBe(availableWondersTotalExpected);
    expect(rules.availableWondersPerPlayer).toBe(
      availableWondersPerPlayerExpected
    );
    expect(rules.maxUsedWondersTotal).toBe(maxUsedWondersTotalExpected);
  });

  it('should remain only one wonder', () => {
    const wondersRemainingOnceMaximumReachedExpected: number = 1;
    expect(
      rules.availableWondersPerPlayer * rules.playersNumber -
        rules.maxUsedWondersTotal
    ).toBe(wondersRemainingOnceMaximumReachedExpected);
  });

  it('should be consistent about number of ages', () => {
    expect(rules.agesCardsNumber.length).toBe(rules.agesNumber);
  });
});
