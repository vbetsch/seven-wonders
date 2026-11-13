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
import { EventEnum } from '@logic/Event/event.enum';
import { AgeCurrentState } from '@logic/AgeCurrentState/age-current-state';

describe('TurnsLoop', () => {
  const ageCardsNumberMock: number = 3;
  let loggerLogSpy: MockInstance;
  let consumeCardSpy: MockInstance;
  let mockRules: Mocked<Rules>;
  let mockGameState: Mocked<GameState>;
  let mockAgeCurrentState: Mocked<AgeCurrentState>;
  let playerOne: PlayerType;
  let playerTwo: PlayerType;
  let loop: TurnsLoop;

  beforeEach(() => {
    loggerLogSpy = vi.spyOn(Logger.prototype, 'log');
    consumeCardSpy = vi.spyOn(AgeCurrentState.prototype, 'consumeCard');

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
    } as unknown as Mocked<GameState>;

    mockAgeCurrentState = {
      currentAgeConsumedCardsNumber: 0,
      consumeCard: consumeCardSpy,
    } as unknown as Mocked<AgeCurrentState>;

    container.registerInstance(Rules, mockRules);
    container.registerInstance(GameState, mockGameState);
    container.registerInstance(AgeCurrentState, mockAgeCurrentState);
    loop = new TurnsLoop(ageCardsNumberMock);
  });

  afterEach(() => {
    container.clearInstances();
    vi.restoreAllMocks();
  });

  it('should run turn by turn without stopping', () => {
    const result: EventEnum = loop.start();

    expect(loggerLogSpy).toHaveBeenNthCalledWith(1, "It is the Player 1's turn to play.");
    expect(loggerLogSpy).toHaveBeenNthCalledWith(2, "It is the Player 2's turn to play.");
    expect(result).toBe(EventEnum.GAME_CONTINUES);
  });

  it('should trigger age is finished', () => {
    mockAgeCurrentState = {
      ...mockAgeCurrentState,
      currentAgeConsumedCardsNumber: ageCardsNumberMock,
    } as unknown as Mocked<AgeCurrentState>;
    container.registerInstance(AgeCurrentState, mockAgeCurrentState);
    loop = new TurnsLoop(ageCardsNumberMock);

    const result: EventEnum = loop.start();

    expect(consumeCardSpy).toHaveBeenCalled();
    expect(loggerLogSpy).toHaveBeenNthCalledWith(1, "It is the Player 1's turn to play.");
    expect(result).toBe(EventEnum.AGE_IS_FINISHED);
  });

  it('should trigger war end - player one wins', () => {
    playerOne.warProgress = 1;

    const result: EventEnum = loop.start();

    expect(loggerLogSpy).toHaveBeenNthCalledWith(1, "It is the Player 1's turn to play.");
    expect(loggerLogSpy).toHaveBeenNthCalledWith(
      2,
      'War is finished ! Winner=Player 1, Loser=Player 2'
    );
    expect(result).toBe(EventEnum.WAR_IS_FINISHED);
  });
});
