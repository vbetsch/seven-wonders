import 'reflect-metadata';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { container } from 'tsyringe';
import { AgeState } from '@logic/AgeState/age-state';

describe('AgeState', () => {
  let ageState: AgeState;

  beforeEach(() => {
    ageState = container.resolve(AgeState);
  });
  afterEach(() => {
    container.clearInstances();
  });

  it('should have correct constant values', () => {
    expect(ageState.consumedCardsNumber).toBe(0);
  });

  it('should increment consumed cards number', () => {
    expect(ageState.consumeCard()).toBe(1);
  });
});
