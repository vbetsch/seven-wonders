import 'reflect-metadata';
import { describe, it, expect, beforeEach, afterEach, vi, type MockInstance } from 'vitest';
import { Logger } from '@core/Logger/logger';
import { Age } from './age';

describe('Age', () => {
  let loggerLogSpy: MockInstance;
  let age: Age;

  beforeEach(() => {
    loggerLogSpy = vi.spyOn(Logger.prototype, 'log');
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
    expect(loggerLogSpy).toHaveBeenCalledWith('There are 12 cards to discover during this age !');
    expect(loggerLogSpy).toHaveBeenCalledWith('Age 1 finished');
  });
});
