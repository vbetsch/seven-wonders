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
    for (let i: number = 1; i <= this._rules.agesNumber; i++) {
      new Age(i);
    }
  }
}
