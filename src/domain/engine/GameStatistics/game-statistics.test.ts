import { GameStatistics } from './game-statistics';
import { PlayerStatisticsType } from '@engine/Player/player-statistics.type';

describe('GameStatistics', () => {
  describe('Initialization', () => {
    it('should be properly instantiated', () => {
      const gameStatistics: GameStatistics = new GameStatistics([]);

      expect(gameStatistics).toBeDefined();
      expect(gameStatistics).toBeInstanceOf(GameStatistics);
    });

    it('should store players statistics', () => {
      const playersStatistics: PlayerStatisticsType[] = [
        { id: 'Player 1', score: 71 },
        { id: 'Player 2', score: 75 },
      ];

      const gameStatistics: GameStatistics = new GameStatistics(
        playersStatistics
      );

      expect(gameStatistics.playersStatistics).toStrictEqual(playersStatistics);
    });
  });

  describe('getWinnerStatistics', () => {
    it('should return player with highest score', () => {
      const playersStatistics: PlayerStatisticsType[] = [
        { id: 'Player 1', score: 71 },
        { id: 'Player 2', score: 75 },
      ];
      const gameStatistics: GameStatistics = new GameStatistics(
        playersStatistics
      );

      const winner: PlayerStatisticsType = gameStatistics.getWinnerStatistics();

      expect(winner).toEqual({ id: 'Player 2', score: 75 });
    });
  });

  describe('getLosersStatistics', () => {
    it('should return all players except the winner', () => {
      const playersStatistics: PlayerStatisticsType[] = [
        { id: 'Player 1', score: 71 },
        { id: 'Player 2', score: 75 },
        { id: 'Player 3', score: 60 },
      ];
      const gameStatistics: GameStatistics = new GameStatistics(
        playersStatistics
      );

      const losers: PlayerStatisticsType[] =
        gameStatistics.getLosersStatistics();

      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      expect(losers).toHaveLength(2);
      expect(losers).toEqual([
        { id: 'Player 1', score: 71 },
        { id: 'Player 3', score: 60 },
      ]);
    });
  });

  describe('hasEquality', () => {
    it('should return true when multiple players have the same highest score', () => {
      const playersStatistics: PlayerStatisticsType[] = [
        { id: 'Player 1', score: 75 },
        { id: 'Player 2', score: 75 },
      ];
      const gameStatistics: GameStatistics = new GameStatistics(
        playersStatistics
      );

      const hasEquality: boolean = gameStatistics.hasEquality();

      expect(hasEquality).toBe(true);
    });

    it('should return false when there is a clear winner', () => {
      const playersStatistics: PlayerStatisticsType[] = [
        { id: 'Player 1', score: 71 },
        { id: 'Player 2', score: 75 },
      ];
      const gameStatistics: GameStatistics = new GameStatistics(
        playersStatistics
      );

      const hasEquality: boolean = gameStatistics.hasEquality();

      expect(hasEquality).toBe(false);
    });
  });
});
