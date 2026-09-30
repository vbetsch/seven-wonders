import { Logger } from '@core/Logger/logger';
import { container } from 'tsyringe';
import { Rules } from '@engine/Rules/rules';
import type { ILoop } from '@core/ILoop/loop.interface';

export class TurnsLoop implements ILoop {
  private readonly _logger: Logger;
  private readonly _rules: Rules;

  public constructor() {
    this._logger = container.resolve(Logger);
    this._rules = container.resolve(Rules);
  }

  public start(): void {
    for (let i = 0; i < this._rules.playersNumber; i++) {
      this._logger.log(`It is the Player ${i + 1}'s turn to play.`);
    }
  }
}
