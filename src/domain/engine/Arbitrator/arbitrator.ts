import { inject, injectable } from 'tsyringe';
import { Rules } from '@engine/Rules/rules';
import { GameResultType } from '@engine/Game/game-result.type';
import { GameStatisticsType } from '@engine/Game/game-statistics.type';

@injectable()
export class Arbitrator {
  public constructor(@inject(Rules) private readonly _rules: Rules) {}

  public getGameResult(gameStatistics: GameStatisticsType): GameResultType {
    return {
      winner: 'Player 1',
      loser: 'Player 2',
    };
  }
}
