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

  public get maxWarProgress(): number {
    return this._maxWarProgress;
  }

  public get playerOneWarProgress(): number {
    return this._playerOneWarProgress;
  }

  public start(): void {
    for (let i = 0; i < this._rules.playersNumber; i++) {
      this._logger.log(`It is the Player ${i + 1}'s turn to play.`);
      // TODO: Remove this code block
      if (i == 0) {
        this._playerOneWarProgress += 1;
      }
      if (this._playerOneWarProgress == this._maxWarProgress) {
        this._logger.log(`War is finished ! Winner=Player ${i + 1}, Loser=Player 2`);
        break;
      }
    }
  }
}
