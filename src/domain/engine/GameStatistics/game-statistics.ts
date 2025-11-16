import { PlayerStatistics } from '@engine/Player/player-statistics.type';

export class GameStatistics {
  private readonly _playersStatistics: PlayerStatistics[] = [];

  public constructor(playersStatistics: PlayerStatistics[]) {
    this._playersStatistics = playersStatistics;
  }

  public get playersStatistics(): PlayerStatistics[] {
    return this._playersStatistics;
  }
}
