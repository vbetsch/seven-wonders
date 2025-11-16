import { PlayerStatistics } from '@engine/Player/player-statistics.type';

export class GameStatistics {
  private readonly _playersStatistics: PlayerStatistics[] = [];

  public constructor(playersStatistics: PlayerStatistics[]) {
    this._playersStatistics = playersStatistics;
  }

  public get playersStatistics(): PlayerStatistics[] {
    return this._playersStatistics;
  }

  public getWinnerStatistics(): PlayerStatistics {
    // eslint-disable-next-line max-params
    return this._playersStatistics.reduce((maxStats, playerStats) =>
      playerStats.score > maxStats.score ? playerStats : maxStats
    );
  }

  public getLosersStatistics(): PlayerStatistics[] {
    const winnerStatistics: PlayerStatistics = this.getWinnerStatistics();
    return this._playersStatistics.filter(
      (player) => player.id !== winnerStatistics.id
    );
  }

  public hasEquality(): boolean {
    const winnerStatistics: PlayerStatistics = this.getWinnerStatistics();
    return this._playersStatistics.some(
      (player) =>
        player.id !== winnerStatistics.id &&
        player.score === winnerStatistics.score
    );
  }
}
