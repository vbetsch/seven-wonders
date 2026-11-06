import 'reflect-metadata';
import { describe, it, expect, beforeEach, afterEach, vi, type MockInstance } from 'vitest';
import { Logger } from '@/domain/engine/Logger/logger';
import { Age } from './age';
import { EventEnum } from '@logic/Event/event.enum';

const { launchMock } = vi.hoisted(() => ({
  launchMock: vi.fn<() => EventEnum.AGE_IS_FINISHED | EventEnum.WAR_IS_FINISHED>(),
}));

vi.mock('@/domain/logic/TurnsCycle/turns-cycle', () => ({
  TurnsCycle: class {
    public launch = launchMock;
  },
}));

describe('Age', () => {
  let loggerLogSpy: MockInstance;
  let age: Age;

  beforeEach(() => {
    loggerLogSpy = vi.spyOn(Logger.prototype, 'log');
    age = new Age(1, 12);
  });

  afterEach(() => {
    launchMock.mockReset();
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
    expect(age.totalCardsNumber).toBeDefined();
    expect(age.totalCardsNumber).toBe(12);
  });

  it('should finish age when turns cycle authorize it', () => {
    launchMock.mockReturnValue(EventEnum.AGE_IS_FINISHED);
    const result: EventEnum = age.begin();
    expect(loggerLogSpy).toHaveBeenCalledWith('Age 1 started');
    expect(launchMock).toHaveBeenCalledOnce();
    expect(loggerLogSpy).toHaveBeenCalledWith('Age 1 finished');
    expect(result).toBe(EventEnum.AGE_IS_FINISHED);
  });
  it('should return event when turns cycle says war is finished', () => {
    launchMock.mockReturnValue(EventEnum.WAR_IS_FINISHED);
    const result: EventEnum = age.begin();
    expect(loggerLogSpy).toHaveBeenCalledWith('Age 1 started');
    expect(launchMock).toHaveBeenCalledOnce();
    expect(result).toBe(EventEnum.WAR_IS_FINISHED);
  });
});
