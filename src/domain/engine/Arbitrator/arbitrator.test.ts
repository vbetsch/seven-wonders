import 'reflect-metadata';
import { container } from 'tsyringe';
import { Arbitrator } from './arbitrator';
import { GameResultType } from '@engine/Game/game-result.type';
import { PlayerStatisticsType } from '@engine/Player/player-statistics.type';

describe('Arbitrator', () => {
  let arbitrator: Arbitrator;

  beforeEach(() => {
    arbitrator = container.resolve(Arbitrator);
  });

  afterEach(() => {
    container.clearInstances();
  });

  describe('Initialization', () => {
    it('should be properly instantiated', () => {
      expect(arbitrator).toBeDefined();
      expect(arbitrator).toBeInstanceOf(Arbitrator);
    });
  });

  describe('getGameResult', () => {
    it('should return null when there is equality', () => {
      const playersStatistics: PlayerStatisticsType[] = [
        { id: 'Player 1', score: 50 },
        { id: 'Player 2', score: 50 },
      ];

      const result: GameResultType | null =
        arbitrator.getGameResult(playersStatistics);

      expect(result).toBeNull();
    });

    it('should return correct result when Player 1 wins', () => {
      const playersStatistics: PlayerStatisticsType[] = [
        { id: 'Player 1', score: 53 },
        { id: 'Player 2', score: 29 },
      ];
      const expectedResult: GameResultType = {
        winner: 'Player 1',
        losers: ['Player 2'],
      };

      const result: GameResultType | null =
        arbitrator.getGameResult(playersStatistics);

      expect(result).toStrictEqual(expectedResult);
    });

    it('should return correct result when Player 2 wins', () => {
      const playersStatistics: PlayerStatisticsType[] = [
        { id: 'Player 1', score: 32 },
        { id: 'Player 2', score: 45 },
      ];
      const expectedResult: GameResultType = {
        winner: 'Player 2',
        losers: ['Player 1'],
      };

      const result: GameResultType | null =
        arbitrator.getGameResult(playersStatistics);

      expect(result).toStrictEqual(expectedResult);
    });
  });
});
