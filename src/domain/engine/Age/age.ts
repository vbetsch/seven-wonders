import 'reflect-metadata';
import { Logger } from '@core/Logger/logger';
import { container } from 'tsyringe';

export class Age {
  private readonly _logger: Logger;
  private readonly _identifier: number;
  private readonly _cardsNumber: number;

  public constructor(identifier: number, cardsNumber: number) {
    this._logger = container.resolve(Logger);
    this._identifier = identifier;
    this._cardsNumber = cardsNumber;
    this._logger.log(`Age ${identifier} started`);
    this._logger.log(`There are ${cardsNumber} cards to discover during this age !`);
    this._logger.log(`Age ${identifier} finished`);
  }

  public get identifier(): number {
    return this._identifier;
  }

  public get cardsNumber(): number {
    return this._cardsNumber;
  }
}
