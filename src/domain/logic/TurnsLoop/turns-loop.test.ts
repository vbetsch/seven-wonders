import 'reflect-metadata';
import { container } from 'tsyringe';
import { TurnsLoop } from './turns-loop';
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  type Mocked,
  type MockInstance,
  vi,
} from 'vitest';
import { Logger } from '@/domain/engine/Logger/logger';
import { Rules } from '@logic/Rules/rules';

describe('TurnsLoop', () => {
  let loggerLogSpy: MockInstance;
  let mockRules: Mocked<Rules>;
  let loop: TurnsLoop;

  beforeEach(() => {
    loggerLogSpy = vi.spyOn(Logger.prototype, 'log');
    mockRules = {
      playersNumber: 2,
      maxWarProgress: 2,
    } as unknown as Mocked<Rules>;

    container.registerInstance(Rules, mockRules);
    loop = container.resolve(TurnsLoop);
  });

  afterEach(() => {
    container.clearInstances();
    vi.restoreAllMocks();
  });

  it('should return true if war is finished', () => {
    expect(loop.warIsFinished).toBe(true);
  });

  it('should return false if war is not finished', () => {
    (loop as any)._playerOne = {
      id: 1,
      warProgress: 2,
    };
    expect(loop.warIsFinished).toBe(false);
  });

  it('should run turn by turn', () => {
    loop.start();

    expect(loggerLogSpy).toHaveBeenCalledWith("It is the Player 1's turn to play.");
    expect(loggerLogSpy).toHaveBeenCalledWith("It is the Player 2's turn to play.");
  });
});
