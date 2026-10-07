import { injectable } from 'tsyringe';
import type { GameResultType } from '@/domain/logic/Game/game-result.type';
import type { PlayerStatisticsType } from '@/domain/logic/Player/player-statistics.type';
import { GameStatistics } from '@/domain/logic/GameStatistics/game-statistics';

@injectable()
export class Arbitrator {
  private _getFormattedLosers(losersStatistics: PlayerStatisticsType[]): string[] {
    return losersStatistics.map(player => player.id);
  }

  public getGameResult(playersStatistics: PlayerStatisticsType[]): GameResultType | null {
    const gameStatistics: GameStatistics = new GameStatistics(playersStatistics);

    const winnerStatistics: PlayerStatisticsType = gameStatistics.getWinnerStatistics();

    if (gameStatistics.hasEquality()) return null;

    return {
      winner: winnerStatistics.id,
      losers: this._getFormattedLosers(gameStatistics.getLosersStatistics()),
    };
  }
}
