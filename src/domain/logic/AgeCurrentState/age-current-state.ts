import { singleton } from 'tsyringe';

@singleton()
export class AgeCurrentState {
  private _currentAgeConsumedCardsNumber: number = 0;

  public consumeCard(): number {
    this._currentAgeConsumedCardsNumber += 1;
    return this._currentAgeConsumedCardsNumber;
  }
}
