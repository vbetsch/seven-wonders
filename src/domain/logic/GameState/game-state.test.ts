import 'reflect-metadata';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { GameState } from '@logic/GameState/game-state';
import type { PlayerType } from '@logic/Player/player.type';
import { container } from 'tsyringe';

describe('GameState', () => {
  let gameState: GameState;

  // Expected
  const playerOneExpected: PlayerType = {
    id: 1,
    warProgress: 0,
  };
  const playerTwoExpected: PlayerType = {
    id: 2,
    warProgress: 0,
  };

  beforeEach(() => {
    gameState = container.resolve(GameState);
  });
  afterEach(() => {
    container.clearInstances();
  });

  it('should have correct constant values', () => {
    expect(gameState.playerOne).toStrictEqual(playerOneExpected);
    expect(gameState.playerTwo).toStrictEqual(playerTwoExpected);
  });

  it('should initialize variables with correct default values', () => {
    expect(gameState.warCardsConsumed).toBe(0);
  });

  it('should increment war cards consumed', () => {
    const state = gameState.pickOneWarCard();
    expect(state).toBe(1);
    expect(gameState.warCardsConsumed).toBe(1);
  });
});
