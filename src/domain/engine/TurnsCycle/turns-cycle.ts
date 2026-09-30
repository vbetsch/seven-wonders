import { container } from 'tsyringe';
import { Logger } from '@core/Logger/logger';
import { Rules } from '@engine/Rules/rules';

export class TurnsCycle {
  private readonly _logger: Logger;
  private readonly _rules: Rules;

  public constructor() {
    this._logger = container.resolve(Logger);
    this._rules = container.resolve(Rules);
  }

  public launch(): void {
    // TODO: Remove this variable
    const turnsNumberBeforeEndGame: number = 2;

    let endedTurnsNumber: number = 0;
    while (endedTurnsNumber < turnsNumberBeforeEndGame) {
      for (let i = 0; i < this._rules.playersNumber; i++) {
        this._logger.log(`It is the Player ${i + 1}'s turn to play.`);
      }
      endedTurnsNumber += 1;
    }
  }
}
