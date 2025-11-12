import { GamePhase } from './game-phase.enum';
import { GameLoop } from '@engine/Game/game-loop';

export class Game {
  private _phase: GamePhase;
  private readonly _loop: GameLoop;
  public constructor() {
    this._phase = GamePhase.WAITING;
    this._loop = new GameLoop();
  }

  public get phase(): GamePhase {
    return this._phase;
  }

  public set phase(value: GamePhase) {
    this._phase = value;
  }
  public run(): void {
    this._loop.start();
  }
}
