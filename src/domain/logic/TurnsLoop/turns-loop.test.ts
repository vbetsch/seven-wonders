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
import { GameState } from '@logic/GameState/game-state';
import type { PlayerType } from '@logic/Player/player.type';

const playerOne: PlayerType = {
  id: 1,
  warProgress: 0,
};
const playerTwo: PlayerType = {
  id: 2,
  warProgress: 0,
};

describe('TurnsLoop', () => {
  let loggerLogSpy: MockInstance;
  let mockRules: Mocked<Rules>;
  let mockGameState: Mocked<GameState>;
  let loop: TurnsLoop;

  beforeEach(() => {
    loggerLogSpy = vi.spyOn(Logger.prototype, 'log');
    mockRules = {
      playersNumber: 2,
      maxWarProgress: 2,
    } as unknown as Mocked<Rules>;
    mockGameState = {
      playerOne,
      playerTwo,
      players: [playerOne, playerTwo],
    } as unknown as Mocked<GameState>;

    container.registerInstance(Rules, mockRules);
    container.registerInstance(GameState, mockGameState);
    loop = container.resolve(TurnsLoop);
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
