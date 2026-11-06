import { singleton } from 'tsyringe';

@singleton()
export class AgeCurrentState {
  private _consumedCardsNumber: number = 0;

  public get consumedCardsNumber(): number {
    return this._consumedCardsNumber;
  }

  public consumeCard(): number {
    this._consumedCardsNumber += 1;
    return this._consumedCardsNumber;
  }
}
