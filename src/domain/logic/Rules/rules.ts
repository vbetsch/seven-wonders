import { injectable } from 'tsyringe';

@injectable()
export class Rules {
  private readonly _playersNumber: number = 2;
  private readonly _agesCardsNumbers: number[] = [3, 2, 4];
  private readonly _maxWarProgress: number = 9;

  /**
   * The number of players (default: 2)
   */
  public get playersNumber(): number {
    return this._playersNumber;
  }

  /**
   * Numbers of cards by age order by index (default: [...]) -> TODO: put real values
   */
  public get agesCardsNumbers(): number[] {
    return this._agesCardsNumbers;
  }

  /**
   * The maximum of war progress by player (default: 9)
   */
  public get maxWarProgress(): number {
    return this._maxWarProgress;
  }
}
