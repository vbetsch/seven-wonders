import 'reflect-metadata';
import { container } from 'tsyringe';
import { TurnsLoop } from './turns-loop';
import { afterEach, beforeEach, describe, expect, it, type MockInstance, vi } from 'vitest';
import { Logger } from '@core/Logger/logger';

describe('TurnsLoop', () => {
  let loggerLogSpy: MockInstance;
  let loop: TurnsLoop;

  beforeEach(() => {
    loop = container.resolve(TurnsLoop);
    loggerLogSpy = vi.spyOn(Logger.prototype, 'log');
  });

  afterEach(() => {
    container.clearInstances();
    vi.restoreAllMocks();
  });

  it('should run turn by turn', () => {
    loop.start();

    expect(loggerLogSpy).toHaveBeenCalledWith("It is the Player 1's turn to play.");
    expect(loggerLogSpy).toHaveBeenCalledWith("It is the Player 2's turn to play.");
  });
});
