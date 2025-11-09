import { Game } from '@engine/Game/game';
import { GamePhase } from '@engine/Game/game-phase.enum';

export class Master {
  private readonly _game: Game;

  public constructor(game: Game) {
    this._game = game;
  }

  public install(): void {
    this._game.phase = GamePhase.INSTALLING;
  }

  public prepare(): void {
    this._game.phase = GamePhase.PREPARING;
  }
}
