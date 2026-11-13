import { singleton } from 'tsyringe';

@singleton()
export class AgeCurrentState {
  private _consumedCardsNumber: number = 0;

  public get consumedCardsNumber(): number {
    return this._consumedCardsNumber;
  }

  public consumeCard(): void {
    this._consumedCardsNumber += 1;
  }

  public reset(): void {
    this._consumedCardsNumber = 0;
  }
}
