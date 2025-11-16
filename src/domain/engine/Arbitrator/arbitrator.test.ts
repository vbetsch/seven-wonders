import 'reflect-metadata';
import { container } from 'tsyringe';
import { Arbitrator } from './arbitrator';
import { GameResultType } from '@engine/Game/game-result.type';
import { GameStatisticsType } from '@engine/Game/game-statistics.type';
import { PlayerStatistics } from '@engine/Player/player-statistics.type';

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
    const playersStatistics: PlayerStatistics[] = [
      {
        id: 'Player 1',
        score: 32,
      },
      {
        id: 'Player 2',
        score: 45,
      },
    ];
    const gameStatistics: GameStatisticsType = { playersStatistics };
    const gameResultExpected: GameResultType = {
      winner: 'Player 2',
      loser: 'Player 1',
    };
    expect(arbitrator.getGameResult(gameStatistics)).toStrictEqual(
      gameResultExpected
    );
  });
});
