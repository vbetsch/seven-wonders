import 'reflect-metadata';
import { Logger } from '@core/Logger/logger';
import { Rules } from '@engine/Rules/rules';
import { container } from 'tsyringe';

export class GameLoop {
  private readonly _logger: Logger;
  private readonly _rules: Rules;
  public constructor() {
    this._logger = container.resolve(Logger);
    this._rules = container.resolve(Rules);
  }

  public start(): void {
    for (let i: number = 1; i <= this._rules.agesNumber; i++) {
      this._logger.log('Age ' + i + '  started');
      this._logger.log('Age ' + i + '  finished');
    }
  }
}
