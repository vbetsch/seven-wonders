import { Game } from '@engine/Game/game';
import { GamePhase } from '@engine/Game/game-phase.enum';

export class Master {
  private readonly _game: Game;

  // eslint-disable-next-line max-params
  private _nextPhase(previous: GamePhase, next: GamePhase): void {
    if (this._game.phase !== previous) {
      throw new Error('Impossible to go to next phase');
    }
    this._game.phase = next;
  }

  public constructor(game: Game) {
    this._game = game;
  }

  public install(): void {
    this._nextPhase(GamePhase.WAITING, GamePhase.INSTALLING);
  }

  public prepare(): void {
    this._nextPhase(GamePhase.INSTALLING, GamePhase.PREPARING);
  }

  public run(): void {
    this._nextPhase(GamePhase.PREPARING, GamePhase.RUNNING);
  }
}
