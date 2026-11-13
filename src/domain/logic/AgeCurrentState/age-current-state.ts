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

  public initialize(ageCardsNumber: number): void {
    this._consumedCardsNumber = 0;
    this._totalCardsNumber = ageCardsNumber;
  }

  public consumeCard(): void {
    this._consumedCardsNumber += 1;
  }
}
