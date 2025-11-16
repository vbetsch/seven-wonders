import { PlayerStatisticsType } from '@engine/Player/player-statistics.type';

export class GameStatistics {
  private readonly _playersStatistics: PlayerStatisticsType[] = [];

  public constructor(playersStatistics: PlayerStatisticsType[]) {
    this._playersStatistics = playersStatistics;
  }

  public get playersStatistics(): PlayerStatisticsType[] {
    return this._playersStatistics;
  }

  public getWinnerStatistics(): PlayerStatisticsType {
    // eslint-disable-next-line max-params
    return this._playersStatistics.reduce((maxStats, playerStats) =>
      playerStats.score > maxStats.score ? playerStats : maxStats
    );
  }

  public getLosersStatistics(): PlayerStatisticsType[] {
    const winnerStatistics: PlayerStatisticsType = this.getWinnerStatistics();
    return this._playersStatistics.filter(
      (player) => player.id !== winnerStatistics.id
    );
  }

  public hasEquality(): boolean {
    const winnerStatistics: PlayerStatisticsType = this.getWinnerStatistics();
    return this._playersStatistics.some(
      (player) =>
        player.id !== winnerStatistics.id &&
        player.score === winnerStatistics.score
    );
  }
}
