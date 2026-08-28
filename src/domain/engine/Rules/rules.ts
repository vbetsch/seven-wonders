import { injectable } from 'tsyringe';

@injectable()
export class Rules {
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  private readonly _playersNumber: number = 2;

  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  private readonly _agesNumber: number = 3;

  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  private readonly _agesCardsNumber: number[] = [42, 38, 54];

  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  private readonly _availableWondersTotal: number = 12;

  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  private readonly _availableWondersPerPlayer: number = 4;

  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  private readonly _maxUsedWondersTotal: number = 7;

  /**
   * The number of players (default: 2)
   */
  public get playersNumber(): number {
    return this._playersNumber;
  }

  /**
   * The number of ages (default: 3)
   */
  public get agesNumber(): number {
    return this._agesNumber;
  }

  /**
   * The number of cards by age order by index (default: [42, 38, 54])
   */
  public get agesCardsNumber(): number[] {
    return this._agesCardsNumber;
  }

  /**
   * The total number of wonders available (default: 12)
   */
  public get availableWondersTotal(): number {
    return this._availableWondersTotal;
  }

  /**
   * The maximum number of usable wonders (default: 7)
   */
  public get maxUsedWondersTotal(): number {
    return this._maxUsedWondersTotal;
  }

  /**
   * The number of wonders available per player (default: 4)
   */
  public get availableWondersPerPlayer(): number {
    return this._availableWondersPerPlayer;
  }
}
