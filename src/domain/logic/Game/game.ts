import { GamePhase } from './game-phase.enum';
import { AgesLoop } from '@/domain/logic/AgesLoop/ages-loop';

export class Game {
  private _phase: GamePhase;
  private readonly _loop: AgesLoop;

  public constructor() {
    this._phase = GamePhase.WAITING;
    this._loop = new AgesLoop();
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
