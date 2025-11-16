import { inject, injectable } from 'tsyringe';
import { Rules } from '@engine/Rules/rules';
import { GameResultType } from '@engine/Game/game-result.type';
import { GameStatisticsType } from '@engine/Game/game-statistics.type';

@injectable()
export class Arbitrator {
  public constructor(@inject(Rules) private readonly _rules: Rules) {}

  public getGameResult(gameStatistics: GameStatisticsType): GameResultType {
    let maxScore: number = 0;
    gameStatistics.playersStatistics.forEach((playerStatistics) => {
      if (playerStatistics.score > maxScore) {
        maxScore = playerStatistics.score;
      }
    });

    let previousScore: number = 0;
    let winnerId: string = '';
    let loserId: string = '';
    gameStatistics.playersStatistics.forEach((playerStatistics) => {
      if (playerStatistics.score === maxScore) {
        winnerId = playerStatistics.id;
      } else {
        loserId = playerStatistics.id;
      }
      if (playerStatistics.score === previousScore) {
        winnerId = '';
        loserId = '';
      }
      previousScore = playerStatistics.score;
    });

    return {
      winner: winnerId,
      loser: loserId,
    };
  }
}
