import 'reflect-metadata';
import { container } from 'tsyringe';
import { Rules } from '@engine/Rules/rules';
import { Age } from '@engine/Age/age';

export class GameLoop {
  private readonly _rules: Rules;

  public constructor() {
    this._rules = container.resolve(Rules);
  }

  public start(): void {
    this._rules.agesCardsNumbers.forEach((value, index) => {
      new Age(index + 1, value);
    });
  }
}
