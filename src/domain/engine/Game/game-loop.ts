import { Logger } from '@core/Logger/logger';
import { Rule } from '@engine/Rule/rule';

export class GameLoop {
  private readonly _logger: Logger;
  private readonly _rule: Rule;
  public constructor() {
    this._logger = new Logger();
    this._rule = new Rule();
  }

  public start(): void {
    for (let i = 1; i < this._rule.agesNumber + 1; i++) {
      this._logger.log('age ' + i + '  started');
      //implement turn by turn functionalities
      this._logger.log('age ' + i + '  finished');
    }
  }
}
