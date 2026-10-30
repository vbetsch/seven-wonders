import { TurnsLoop } from '@/domain/logic/TurnsLoop/turns-loop';
import { EventEnum } from '@logic/Event/event.enum';

export class TurnsCycle {
  private readonly _turnsLoop: TurnsLoop;

  public constructor(ageCardsNumber: number) {
    this._turnsLoop = new TurnsLoop(ageCardsNumber);
  }

  public launch(): EventEnum.AGE_IS_FINISHED | EventEnum.WAR_IS_FINISHED {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    while (true) {
      const eventReturned: EventEnum = this._turnsLoop.start();
      if (eventReturned !== EventEnum.GAME_CONTINUES) {
        return eventReturned;
      }
    }
  }
}
