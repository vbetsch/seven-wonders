import { inject, injectable } from 'tsyringe';
import { Rules } from '@engine/Rules/rules';
import { GameResultType } from '@engine/Game/game-result.type';
import { GameStatisticsType } from '@engine/Game/game-statistics.type';
import { PlayerStatistics } from '@engine/Player/player-statistics.type';

@injectable()
export class Arbitrator {
  public constructor(@inject(Rules) private readonly _rules: Rules) {}

  private _getWinnerStatistics(
    playersStatistics: PlayerStatistics[]
  ): PlayerStatistics {
    // eslint-disable-next-line max-params
    return playersStatistics.reduce((maxStats, playerStats) =>
      playerStats.score > maxStats.score ? playerStats : maxStats
    );
  }

  // eslint-disable-next-line max-params
  private _getLosersStatistics(
    playersStatistics: PlayerStatistics[],
    winnerStatistics: PlayerStatistics
  ): PlayerStatistics[] {
    return playersStatistics.filter(
      (player) => player.id !== winnerStatistics.id
    );
  }

  private _getFormattedLosers(losersStatistics: PlayerStatistics[]): string[] {
    return losersStatistics.map((player) => player.id);
  }

  // eslint-disable-next-line max-params
  private _hasEquality(
    playersStatistics: PlayerStatistics[],
    winnerStatistics: PlayerStatistics
  ): boolean {
    return playersStatistics.some(
      (player) =>
        player.id !== winnerStatistics.id &&
        player.score === winnerStatistics.score
    );
  }

  public getGameResult(
    gameStatistics: GameStatisticsType
  ): GameResultType | null {
    const winnerStatistics: PlayerStatistics = this._getWinnerStatistics(
      gameStatistics.playersStatistics
    );

    if (this._hasEquality(gameStatistics.playersStatistics, winnerStatistics))
      return null;

    return {
      winner: winnerStatistics.id,
      losers: this._getFormattedLosers(
        this._getLosersStatistics(
          gameStatistics.playersStatistics,
          winnerStatistics
        )
      ),
    };
  }
}
