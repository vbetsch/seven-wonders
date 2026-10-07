import { TurnsLoop } from '@/domain/logic/TurnsLoop/turns-loop';

export class TurnsCycle {
  private readonly _turnsLoop: TurnsLoop;

  public constructor() {
    this._turnsLoop = new TurnsLoop();
  }

  public launch(): void {
    while (this._turnsLoop.playerOneWarProgress < this._turnsLoop.maxWarProgress) {
      this._turnsLoop.start();
    }
  }
}
