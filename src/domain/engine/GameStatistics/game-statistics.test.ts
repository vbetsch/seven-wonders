import { GameStatistics } from './game-statistics';
import { PlayerStatisticsType } from '@engine/Player/player-statistics.type';

describe('GameStatistics', () => {
  it('should be well implemented', () => {
    const gameStatistics: GameStatistics = new GameStatistics([]);
    expect(gameStatistics).toBeTruthy();
    expect(gameStatistics).toBeInstanceOf(GameStatistics);
    expect(gameStatistics).toBeDefined();
  });
  it('should have players statistics', () => {
    const playersStatistics: PlayerStatisticsType[] = [
      {
        id: 'Player 1',
        score: 71,
      },
      {
        id: 'Player 2',
        score: 75,
      },
    ];
    const gameStatistics: GameStatistics = new GameStatistics(
      playersStatistics
    );
    expect(gameStatistics.playersStatistics).toStrictEqual(playersStatistics);
  });
});
