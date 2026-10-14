import { container } from 'tsyringe';
import { Rules } from '@/domain/logic/Rules/rules';
import { Age } from '@/domain/logic/Age/age';
import type { ILoop } from '@/domain/engine/ILoop/loop.interface';

export class AgesLoop implements ILoop {
  private readonly _rules: Rules;

  public constructor() {
    this._rules = container.resolve(Rules);
  }

  public start(): void {
    for (let index = 0; index < this._rules.agesCardsNumbers.length; index++) {
      const currentCardsNumber: number | undefined = this._rules.agesCardsNumbers[index];
      if (currentCardsNumber === undefined) {
        throw new Error(`cardsNumber ${currentCardsNumber} is out of range`);
      }
      const currentAge: Age = new Age(index + 1, currentCardsNumber);
      currentAge.begin();
      if (index === 0) {
        break;
      }
    }
  }
}
