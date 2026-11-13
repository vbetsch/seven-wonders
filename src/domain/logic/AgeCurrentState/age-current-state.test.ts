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

  it('should throw an error if we try to get maxCardsNumber before initialize', () => {
    expect(() => ageState.maxCardsNumber).toThrow(
      'This instance of AgeCurrentState need to be initialized'
    );
  });

  it('should init consumed cards number and max cards number', () => {
    ageState.consumeCard();
    ageState.initialize(46);

    expect(ageState.consumedCardsNumber).toBe(0);
    expect(ageState.maxCardsNumber).toBe(46);
  });

  it('should increment consumed cards number', () => {
    ageState.consumeCard();
    expect(ageState.consumedCardsNumber).toBe(1);
  });

  it('should return age is not finished', () => {
    ageState.initialize(46);
    expect(ageState.isFinished()).toBe(false);
  });

  it('should return age is finished if ageCardsNumber is equal to maxCardsNumber', () => {
    ageState.initialize(1);
    ageState.consumeCard();
    expect(ageState.isFinished()).toBe(true);
  });
});
