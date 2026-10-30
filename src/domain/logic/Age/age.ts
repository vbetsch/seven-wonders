import { Logger } from '@/domain/engine/Logger/logger';
import { container } from 'tsyringe';
import { TurnsCycle } from '@/domain/logic/TurnsCycle/turns-cycle';
import { EventEnum } from '@logic/Event/event.enum';

export class Age {
  private readonly _logger: Logger;
  private readonly _identifier: number;
  private readonly _cardsNumber: number;
  private readonly _turnsCycle: TurnsCycle;

  public constructor(identifier: number, cardsNumber: number) {
    this._logger = container.resolve(Logger);
    this._identifier = identifier;
    this._cardsNumber = cardsNumber;
    this._turnsCycle = new TurnsCycle(this._cardsNumber);
  }

  public begin(): EventEnum.AGE_IS_FINISHED | EventEnum.WAR_IS_FINISHED {
    this._logger.log(`Age ${this._identifier} started`);
    const eventReturned: EventEnum = this._turnsCycle.launch();
    if (eventReturned === EventEnum.AGE_IS_FINISHED) {
      this._logger.log(`Age ${this._identifier} finished`);
    }
    return eventReturned;
  }

  public get identifier(): number {
    return this._identifier;
  }

  public get cardsNumber(): number {
    return this._cardsNumber;
  }
}
