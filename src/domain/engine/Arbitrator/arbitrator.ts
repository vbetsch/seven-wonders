import { inject, injectable } from 'tsyringe';
import { Rules } from '@engine/Rules/rules';
import { GameResultType } from '@engine/Game/game-result.type';
import { GameStatisticsType } from '@engine/Game/game-statistics.type';
import { PlayerStatistics } from '@engine/Player/player-statistics.type';

@injectable()
export class Arbitrator {
  public constructor(@inject(Rules) private readonly _rules: Rules) {}

  public getGameResult(
    gameStatistics: GameStatisticsType
  ): GameResultType | null {
    const winnerStats: PlayerStatistics =
      // eslint-disable-next-line max-params
      gameStatistics.playersStatistics.reduce((maxStats, playerStats) =>
        playerStats.score > maxStats.score ? playerStats : maxStats
      );

    const losers: string[] = gameStatistics.playersStatistics
      .filter((player) => player.id !== winnerStats.id)
      .map((player) => player.id);

    const hasEquality: boolean = gameStatistics.playersStatistics.some(
      (player) =>
        player.id !== winnerStats.id && player.score === winnerStats.score
    );

    if (hasEquality) return null;

    return {
      winner: winnerStats.id,
      losers,
    };
  }
}
