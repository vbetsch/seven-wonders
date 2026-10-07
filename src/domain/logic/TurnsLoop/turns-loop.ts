import { Logger } from '@/domain/engine/Logger/logger';
import { container } from 'tsyringe';
import { Rules } from '@/domain/logic/Rules/rules';
import type { ILoop } from '@/domain/engine/ILoop/loop.interface';
import type { PlayerType } from '@logic/Player/player.type';

export class TurnsLoop implements ILoop {
  private readonly _logger: Logger;
  private readonly _rules: Rules;
  // TODO: Remove this variable
  private readonly _maxWarProgress: number = 2;

  private _playerOne: PlayerType = {
    id: 1,
    warProgress: 0,
  };
  private _playerTwo: PlayerType = {
    id: 2,
    warProgress: 0,
  };

  public constructor() {
    this._logger = container.resolve(Logger);
    this._rules = container.resolve(Rules);
  }

  public get warIsFinished() {
    return this._playerOne.warProgress < this._maxWarProgress;
  }

  public start(): void {
    for (let index = 0; index < this._rules.playersNumber; index++) {
      let currentPlayer: PlayerType | null = null;
      if (this._playerOne.id == index + 1) {
        currentPlayer = this._playerOne;
      } else if (this._playerTwo.id == index + 1) {
        currentPlayer = this._playerTwo;
      }
      this._logger.log(`It is the Player ${currentPlayer?.id}'s turn to play.`);
      // TODO: Remove this code block
      if (currentPlayer?.id == this._playerOne.id) {
        this._playerOne.warProgress += 1;
      }

      if (this._playerOne.warProgress == this._maxWarProgress) {
        this._logger.log(`War is finished ! Winner=Player ${this._playerOne.id}, Loser=Player 2`);
        break;
      }
    }
  }
}
