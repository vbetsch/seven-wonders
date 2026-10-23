import 'reflect-metadata';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { Rules } from './rules';
import { container } from 'tsyringe';

describe('Rules', () => {
  let rules: Rules;

  // Expected
  const playersNumberExpected: number = 2;
  const agesCardsNumbersExpected: number[] = [3, 2, 4];
  const maxWarProgressExpected: number = 9;

  beforeEach(() => {
    rules = container.resolve(Rules);
  });

  afterEach(() => {
    container.clearInstances();
  });

  it('should have correct constant values', () => {
    expect(rules.playersNumber).toBe(playersNumberExpected);
    expect(rules.agesCardsNumbers).toStrictEqual(agesCardsNumbersExpected);
    expect(rules.maxWarProgress).toBe(maxWarProgressExpected);
  });
});
