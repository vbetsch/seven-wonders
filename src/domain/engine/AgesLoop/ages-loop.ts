import { container } from 'tsyringe';
import { Rules } from '@engine/Rules/rules';
import { Age } from '@engine/Age/age';
import type { ILoop } from '@core/ILoop/loop.interface';

export class AgesLoop implements ILoop {
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
