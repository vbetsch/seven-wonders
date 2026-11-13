import { singleton } from 'tsyringe';

@singleton()
export class AgeCurrentState {
  private _currentAgeConsumedCardsNumber: number = 0;

  public get currentAgeConsumedCardsNumber(): number {
    return this._currentAgeConsumedCardsNumber;
  }

  public consumeCard(): void {
    this._currentAgeConsumedCardsNumber += 1;
  }

  public reset(): void {
    this._currentAgeConsumedCardsNumber = 0;
  }
}
