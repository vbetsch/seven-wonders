import { TurnsLoop } from '@/domain/logic/TurnsLoop/turns-loop';

export class TurnsCycle {
  private readonly _turnsLoop: TurnsLoop;

  public constructor() {
    this._turnsLoop = new TurnsLoop();
  }

  public launch(): void {
    // TODO: Remove this variable
    const turnsNumberBeforeEndGame: number = 2;

    let endedTurnsNumber: number = 0;
    while (endedTurnsNumber < turnsNumberBeforeEndGame) {
      this._turnsLoop.start();
      endedTurnsNumber += 1;
    }
  }
}
