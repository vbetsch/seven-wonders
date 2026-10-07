import 'reflect-metadata';
import { afterEach, beforeEach, describe, expect, it, type MockInstance, vi } from 'vitest';
import { Logger } from '@core/Logger/logger';
import { TurnsCycle } from './turns-cycle';

describe('TurnsCycle', () => {
  let loggerLogSpy: MockInstance;
  let cycle: TurnsCycle;

  beforeEach(() => {
    loggerLogSpy = vi.spyOn(Logger.prototype, 'log');
    cycle = new TurnsCycle();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should run turn by turn', () => {
    cycle.launch();
    expect(loggerLogSpy).toHaveBeenNthCalledWith(1, "It is the Player 1's turn to play.");
    expect(loggerLogSpy).toHaveBeenNthCalledWith(2, "It is the Player 2's turn to play.");
    expect(loggerLogSpy).toHaveBeenNthCalledWith(3, "It is the Player 1's turn to play.");
    expect(loggerLogSpy).toHaveBeenNthCalledWith(4, "It is the Player 2's turn to play.");
  });
});
