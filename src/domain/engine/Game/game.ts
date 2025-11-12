import { GamePhase } from './game-phase.enum';

export class Game {
  private _phase: GamePhase;

  public constructor() {
    this._phase = GamePhase.WAITING;
  }

  public get phase(): GamePhase {
    return this._phase;
  }

  public set phase(value: GamePhase) {
    this._phase = value;
  }
}
