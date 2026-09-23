import { Logger } from '@core/Logger/logger';
import { container } from 'tsyringe';

export class TurnsLoop {
  private readonly _logger: Logger;

  public constructor() {
    this._logger = container.resolve(Logger);
  }

  public start(): void {
    this._logger.log('It is the Player 1 turn to play.');
    this._logger.log('It is the Player 2 turn to play.');
    this._logger.log('It is the Player 1 turn to play.');
    this._logger.log('It is the Player 2 turn to play.');
  }
}
