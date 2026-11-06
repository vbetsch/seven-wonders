import { Logger } from '@/domain/engine/Logger/logger';
import { container } from 'tsyringe';
import { TurnsCycle } from '@/domain/logic/TurnsCycle/turns-cycle';
import { EventEnum } from '@logic/Event/event.enum';
import { AgeCurrentState } from '@logic/AgeCurrentState/age-current-state';

export class Age {
  private readonly _logger: Logger;
  private readonly _identifier: number;
  private readonly _totalCardsNumber: number;
  private readonly _turnsCycle: TurnsCycle;
  private readonly _ageCurrentState: AgeCurrentState;

  public constructor(identifier: number, totalCardsNumber: number) {
    this._logger = container.resolve(Logger);
    this._ageCurrentState = container.resolve(AgeCurrentState);
    this._identifier = identifier;
    this._totalCardsNumber = totalCardsNumber;
    this._turnsCycle = new TurnsCycle(this._totalCardsNumber);
    this._ageCurrentState.reset();
  }

  public begin(): EventEnum.AGE_IS_FINISHED | EventEnum.WAR_IS_FINISHED {
    this._logger.log(`Age ${this._identifier} started`);
    const eventReturned: EventEnum.AGE_IS_FINISHED | EventEnum.WAR_IS_FINISHED =
      this._turnsCycle.launch();
    if (eventReturned === EventEnum.AGE_IS_FINISHED) {
      this._logger.log(`Age ${this._identifier} finished`);
    }
    return eventReturned;
  }

  public get identifier(): number {
    return this._identifier;
  }

  public get totalCardsNumber(): number {
    return this._totalCardsNumber;
  }
}
