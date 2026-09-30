import 'reflect-metadata';
import { describe, it, expect, beforeEach, afterEach, vi, type MockInstance } from 'vitest';
import { Logger } from '@core/Logger/logger';
import { Age } from './age';
import { TurnsCycle } from '@engine/TurnsCycle/turns-cycle';

describe('Age', () => {
  let loggerLogSpy: MockInstance;
  let turnsCycleStartSpy: MockInstance;
  let age: Age;

  beforeEach(() => {
    loggerLogSpy = vi.spyOn(Logger.prototype, 'log');
    turnsCycleStartSpy = vi.spyOn(TurnsCycle.prototype, 'launch');
    age = new Age(1, 12);
  });

  afterEach(() => {
    loggerLogSpy.mockRestore();
  });

  it('should be well implemented', () => {
    expect(age).toBeDefined();
    expect(age).toBeInstanceOf(Age);
  });

  it('should have an identifier', () => {
    expect(age.identifier).toBeDefined();
    expect(age.identifier).toBe(1);
  });

  it('should have a number of cards', () => {
    expect(age.cardsNumber).toBeDefined();
    expect(age.cardsNumber).toBe(12);
  });

  it('should log during instantiation', () => {
    expect(loggerLogSpy).toHaveBeenCalledWith('Age 1 started');
    expect(turnsCycleStartSpy).toHaveBeenCalledTimes(1);
    expect(loggerLogSpy).toHaveBeenCalledWith('Age 1 finished');
  });
});
