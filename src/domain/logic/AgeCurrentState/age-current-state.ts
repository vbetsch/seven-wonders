import { singleton } from 'tsyringe';

@singleton()
export class AgeCurrentState {
  private _consumedCardsNumber: number = 0;
  private _maxCardsNumber: number = 0;

  public get consumedCardsNumber(): number {
    return this._consumedCardsNumber;
  }

  public get maxCardsNumber(): number {
    return this._maxCardsNumber;
  }

  public initialize(ageCardsNumber: number): void {
    this._consumedCardsNumber = 0;
    this._maxCardsNumber = ageCardsNumber;
  }

  public consumeCard(): void {
    this._consumedCardsNumber += 1;
  }
}
