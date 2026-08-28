import 'reflect-metadata';
import { Logger } from '@core/Logger/logger';
import { container } from 'tsyringe';

export class Age {
  private readonly _logger: Logger;
  private readonly _identifier: number;

  public constructor(identifier: number) {
    this._logger = container.resolve(Logger);
    this._identifier = identifier;
    this._logger.log('Age ' + identifier + ' started');
    this._logger.log('Age ' + identifier + ' finished');
  }

  public get identifier(): number {
    return this._identifier;
  }
}
