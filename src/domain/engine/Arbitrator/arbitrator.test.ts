import 'reflect-metadata';
import { container } from 'tsyringe';
import { Arbitrator } from './arbitrator';
import { GameResultType } from '@engine/Game/game-result.type';
import { PlayerStatisticsType } from '@engine/Player/player-statistics.type';
import { GameStatistics } from '@engine/GameStatistics/game-statistics';

describe('Arbitrator', () => {
  let arbitrator: Arbitrator;

  beforeEach(() => {
    arbitrator = container.resolve(Arbitrator);
  });

  afterEach(() => {
    container.clearInstances();
  });

  it('should be well implemented', () => {
    expect(arbitrator).toBeTruthy();
    expect(arbitrator).toBeInstanceOf(Arbitrator);
    expect(arbitrator).toBeDefined();
  });

  it('should get game result - winner is player 2', () => {
    const playersStatistics: PlayerStatisticsType[] = [
      { id: 'Player 1', score: 32 },
      { id: 'Player 2', score: 45 },
    ];
    const gameStatistics: GameStatistics = new GameStatistics(
      playersStatistics
    );
    const gameResultExpected: GameResultType = {
      winner: 'Player 2',
      losers: ['Player 1'],
    };
    expect(arbitrator.getGameResult(gameStatistics)).toStrictEqual(
      gameResultExpected
    );
  });

  it('should get game result - winner is player 1', () => {
    const playersStatistics: PlayerStatisticsType[] = [
      {
        id: 'Player 1',
        score: 53,
      },
      {
        id: 'Player 2',
        score: 29,
      },
    ];
    const gameStatistics: GameStatistics = new GameStatistics(
      playersStatistics
    );
    const gameResultExpected: GameResultType = {
      winner: 'Player 1',
      losers: ['Player 2'],
    };
    expect(arbitrator.getGameResult(gameStatistics)).toStrictEqual(
      gameResultExpected
    );
  });

  it('should get game result - equality', () => {
    const playersStatistics: PlayerStatisticsType[] = [
      { id: 'Player 1', score: 50 },
      { id: 'Player 2', score: 50 },
    ];
    const gameStatistics: GameStatistics = new GameStatistics(
      playersStatistics
    );
    expect(arbitrator.getGameResult(gameStatistics)).toBeNull();
  });
});
