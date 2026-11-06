import 'reflect-metadata';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { container } from 'tsyringe';
import { AgeCurrentState } from '@logic/AgeCurrentState/age-current-state';

describe('AgeState', () => {
  let ageState: AgeCurrentState;

  beforeEach(() => {
    ageState = container.resolve(AgeCurrentState);
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
