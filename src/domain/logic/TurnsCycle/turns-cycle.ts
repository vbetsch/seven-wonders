import { TurnsLoop } from '@/domain/logic/TurnsLoop/turns-loop';

export class TurnsCycle {
  private readonly _turnsLoop: TurnsLoop;

  public constructor() {
    this._turnsLoop = new TurnsLoop();
  }

  public launch(): boolean {
    while (true) {
      if (!this._turnsLoop.start()) {
        return false;
      }
    }
  }
}
