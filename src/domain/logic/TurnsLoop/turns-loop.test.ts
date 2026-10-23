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

describe('TurnsLoop', () => {
  let loggerLogSpy: MockInstance;
  let mockRules: Mocked<Rules>;
  let mockGameState: Mocked<GameState>;
  let playerOne: PlayerType;
  let playerTwo: PlayerType;
  let loop: TurnsLoop;

  beforeEach(() => {
    loggerLogSpy = vi.spyOn(Logger.prototype, 'log');

    mockRules = {
      playersNumber: 2,
      maxWarProgress: 2,
    } as unknown as Mocked<Rules>;

    playerOne = {
      id: 1,
      warProgress: 0,
    } satisfies PlayerType;
    playerTwo = {
      id: 2,
      warProgress: 0,
    } satisfies PlayerType;

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

    expect(loggerLogSpy).toHaveBeenNthCalledWith(1, "It is the Player 1's turn to play.");
    expect(loggerLogSpy).toHaveBeenNthCalledWith(2, "It is the Player 2's turn to play.");
  });

  it('should trigger war end - player one wins', () => {
    playerOne.warProgress = 1;
    loop.start();

    expect(loggerLogSpy).toHaveBeenNthCalledWith(1, "It is the Player 1's turn to play.");
    expect(loggerLogSpy).toHaveBeenNthCalledWith(
      2,
      'War is finished ! Winner=Player 1, Loser=Player 2'
    );
  });
});
