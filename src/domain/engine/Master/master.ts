import { Game } from '@engine/Game/game';
import { GamePhase } from '@engine/Game/game-phase.enum';

export class Master {
  private readonly _game: Game;

  public constructor(game: Game) {
    this._game = game;
  }

  public install(): void {
    if (this._game.phase !== GamePhase.WAITING) {
      throw new Error('Impossible to install game');
    }
    this._game.phase = GamePhase.INSTALLING;
  }

  public prepare(): void {
    if (this._game.phase !== GamePhase.INSTALLING) {
      throw new Error('Impossible to prepare game');
    }
    this._game.phase = GamePhase.PREPARING;
  }
}
