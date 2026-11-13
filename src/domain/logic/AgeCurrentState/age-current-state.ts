import { singleton } from 'tsyringe';

@singleton()
export class AgeCurrentState {
  private _consumedCardsNumber: number = 0;
  private _totalCardsNumber: number = 0;

  public get consumedCardsNumber(): number {
    return this._consumedCardsNumber;
  }

  public get totalCardsNumber(): number {
    return this._totalCardsNumber;
  }

  public consumeCard(): void {
    this._consumedCardsNumber += 1;
  }

  public reset(): void {
    this._consumedCardsNumber = 0;
  }
}
