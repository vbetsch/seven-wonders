import { injectable } from 'tsyringe';
import { GameResultType } from '@engine/Game/game-result.type';
import { PlayerStatisticsType } from '@engine/Player/player-statistics.type';
import { GameStatistics } from '@engine/GameStatistics/game-statistics';

@injectable()
export class Arbitrator {
  // public constructor(@inject(Rules) private readonly _rules: Rules) {}

  private _getFormattedLosers(
    losersStatistics: PlayerStatisticsType[]
  ): string[] {
    return losersStatistics.map((player) => player.id);
  }

  public getGameResult(gameStatistics: GameStatistics): GameResultType | null {
    const winnerStatistics: PlayerStatisticsType =
      gameStatistics.getWinnerStatistics();

    if (gameStatistics.hasEquality()) return null;

    return {
      winner: winnerStatistics.id,
      losers: this._getFormattedLosers(gameStatistics.getLosersStatistics()),
    };
  }
}
