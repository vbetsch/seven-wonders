import { Age } from '@engine/Game/age';
import { Logger } from '@core/Logger/logger';
import { Rule } from '@engine/Rule/rule';

export class GameLoop {
  private _currentTurn: number = 0;
  private readonly _logger: Logger;
  private readonly _rule: Rule;
  public constructor() {
    this._logger = new Logger();
    this._rule = new Rule();
  }

  public start(): void {
    const age: Age = new Age(1);
    for (let i = age._index; i < this._rule.agesNumber; i++) {
      age.start();
      age._index = i;
      console.log('index age ' + age._index);
      while (this._currentTurn < this._rule.maxTurnsPerAge) {
        console.log('index tour ' + this._currentTurn);
        this._logger.log(``);
        this._currentTurn++;
      }
    }
  }
}
