import { Logger } from '@core/Logger/logger';
import { container } from 'tsyringe';
import { TurnsCycle } from '@engine/TurnsCycle/turns-cycle';

export class Age {
  private readonly _logger: Logger;
  private readonly _identifier: number;
  private readonly _cardsNumber: number;
  private readonly _turnsCycle: TurnsCycle;

  public constructor(identifier: number, cardsNumber: number) {
    this._logger = container.resolve(Logger);
    this._identifier = identifier;
    this._cardsNumber = cardsNumber;
    this._turnsCycle = new TurnsCycle();
    this._begin();
  }

  private _begin(): void {
    this._logger.log(`Age ${this._identifier} started`);
    this._turnsCycle.launch();
    this._logger.log(`Age ${this._identifier} finished`);
  }

  public get identifier(): number {
    return this._identifier;
  }

  public get cardsNumber(): number {
    return this._cardsNumber;
  }
}
