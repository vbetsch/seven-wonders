import { Logger } from '@/domain/engine/Logger/logger';
import { container } from 'tsyringe';
import { Rules } from '@/domain/logic/Rules/rules';
import type { ILoop } from '@/domain/engine/ILoop/loop.interface';

export class TurnsLoop implements ILoop {
  private readonly _logger: Logger;
  private readonly _rules: Rules;
  // TODO: Remove this variable
  private readonly _maxWarProgress: number = 2;
  private _playerOneWarProgress: number = 0;

  public constructor() {
    this._logger = container.resolve(Logger);
    this._rules = container.resolve(Rules);
  }

  public get warIsFinished() {
    return this._playerOneWarProgress < this._maxWarProgress;
  }

  public start(): void {
    for (let index = 0; index < this._rules.playersNumber; index++) {
      this._logger.log(`It is the Player ${index + 1}'s turn to play.`);
      // TODO: Remove this code block
      if (index == 0) {
        this._playerOneWarProgress += 1;
      }

      if (this._playerOneWarProgress == this._maxWarProgress) {
        this._logger.log(`War is finished ! Winner=Player ${index + 1}, Loser=Player 2`);
        break;
      }
    }
  }
}
