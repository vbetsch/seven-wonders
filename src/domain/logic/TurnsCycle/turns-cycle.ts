import { TurnsLoop } from '@/domain/logic/TurnsLoop/turns-loop';
import { EventEnum } from '@logic/Event/event.enum';

export class TurnsCycle {
  private readonly _turnsLoop: TurnsLoop;

  public constructor(ageCardsNumber: number) {
    this._turnsLoop = new TurnsLoop(ageCardsNumber);
  }

  public launch(): boolean {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    while (true) {
      if (this._turnsLoop.start() !== EventEnum.GAME_CONTINUES) {
        return false;
      }
    }
  }
}
