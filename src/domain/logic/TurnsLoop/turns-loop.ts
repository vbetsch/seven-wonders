import { Logger } from '@/domain/engine/Logger/logger';
import { container } from 'tsyringe';
import { Rules } from '@/domain/logic/Rules/rules';
import type { ILoop } from '@/domain/engine/ILoop/loop.interface';
import type { PlayerType } from '@logic/Player/player.type';
import { GameState } from '@logic/GameState/game-state';

export class TurnsLoop implements ILoop {
  private readonly _logger: Logger;
  private readonly _rules: Rules;
  private readonly _gameState: GameState;

  public constructor() {
    this._logger = container.resolve(Logger);
    this._rules = container.resolve(Rules);
    this._gameState = container.resolve(GameState);
  }

  /* istanbul ignore next */
  private _getLoser(winner: PlayerType): PlayerType {
    if (winner.id === this._gameState.playerOne.id) {
      return this._gameState.playerTwo;
    }
    return this._gameState.playerOne;
  }

  public start(): boolean {
    for (let index = 0; index < this._rules.playersNumber; index++) {
      let currentPlayer: PlayerType = this._gameState.playerOne;
      if (this._gameState.playerTwo.id === index + 1) {
        currentPlayer = this._gameState.playerTwo;
      }

      this._logger.log(`It is the Player ${currentPlayer.id}'s turn to play.`);

      // TODO: Remove this code block
      if (currentPlayer.id === this._gameState.playerOne.id) {
        currentPlayer.warProgress += 1;
        this._gameState.pickOneWarCard();
      }

      if (currentPlayer.warProgress == this._rules.maxWarProgress) {
      if (currentPlayer.warProgress === this._rules.maxWarProgress) {
        this._logger.log(
          `War is finished ! Winner=Player ${currentPlayer.id}, Loser=Player ${this._getLoser(currentPlayer).id}`
        );
        return false;
      }
    }
    return true;
  }
}
