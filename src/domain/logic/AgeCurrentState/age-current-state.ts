import { singleton } from 'tsyringe';

@singleton()
export class AgeCurrentState {
  private _currentAgeConsumedCardsNumber: number = 0;

  public get currentAgeConsumedCardsNumber(): number {
    return this._currentAgeConsumedCardsNumber;
  }

  public consumeCard(): number {
    this._currentAgeConsumedCardsNumber += 1;
    return this._currentAgeConsumedCardsNumber;
  }

  public reset(): void {
    this._currentAgeConsumedCardsNumber = 0;
  }
}
