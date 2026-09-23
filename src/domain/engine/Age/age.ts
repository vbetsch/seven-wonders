import { Logger } from '@core/Logger/logger';
import { container } from 'tsyringe';
import { TurnsLoop } from '@engine/TurnsLoop/turns-loop';

export class Age {
  private readonly _logger: Logger;
  private readonly _identifier: number;
  private readonly _cardsNumber: number;
  private readonly _turnsLoop: TurnsLoop;

  public constructor(identifier: number, cardsNumber: number) {
    this._logger = container.resolve(Logger);
    this._identifier = identifier;
    this._cardsNumber = cardsNumber;

    this._turnsLoop = new TurnsLoop();
    this._logger.log(`Age ${identifier} started`);
    this._turnsLoop.start();
    this._logger.log(`Age ${identifier} finished`);
  }

  public get identifier(): number {
    return this._identifier;
  }

  public get cardsNumber(): number {
    return this._cardsNumber;
  }
}
