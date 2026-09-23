import 'reflect-metadata';
import { describe, it, expect, beforeEach, afterEach, vi, type MockInstance } from 'vitest';
import { Logger } from '@core/Logger/logger';
import { Age } from './age';
import { TurnsLoop } from '@engine/TurnsLoop/turns-loop';

describe('Age', () => {
  let loggerLogSpy: MockInstance;
  let turnsLoopStartSpy: MockInstance;
  let age: Age;

  beforeEach(() => {
    loggerLogSpy = vi.spyOn(Logger.prototype, 'log');
    turnsLoopStartSpy = vi.spyOn(TurnsLoop.prototype, 'start');
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
    expect(turnsLoopStartSpy).toHaveBeenCalledTimes(1);
    expect(loggerLogSpy).toHaveBeenCalledWith('Age 1 finished');
  });
});
