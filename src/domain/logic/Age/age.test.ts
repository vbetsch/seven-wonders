import 'reflect-metadata';
import { describe, it, expect, beforeEach, afterEach, vi, type MockInstance } from 'vitest';
import { Logger } from '@/domain/engine/Logger/logger';
import { Age } from './age';
import { TurnsCycle } from '@/domain/logic/TurnsCycle/turns-cycle';

describe('Age', () => {
  let loggerLogSpy: MockInstance;
  let turnsCycleLaunchSpy: MockInstance;
  let age: Age;

  beforeEach(() => {
    loggerLogSpy = vi.spyOn(Logger.prototype, 'log');
    turnsCycleLaunchSpy = vi.spyOn(TurnsCycle.prototype, 'launch');
    age = new Age(1, 12);
  });

  afterEach(() => {
    vi.restoreAllMocks();
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

  it('should log and launch turns cycle during instantiation', () => {
    expect(loggerLogSpy).toHaveBeenCalledWith('Age 1 started');
    expect(turnsCycleLaunchSpy).toHaveBeenCalledOnce();
    expect(loggerLogSpy).toHaveBeenCalledWith('Age 1 finished');
  });
});
