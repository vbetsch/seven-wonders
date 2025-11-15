import { injectable } from 'tsyringe';

@injectable()
export class Rule {
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  private readonly _agesNumber: number = 3; // The number of ages (default: 3)
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  private readonly _availableWondersTotal: number = 12; // The total number of wonders available (default: 12)
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  private readonly _availableWondersPerPlayer: number = 4; // The number of wonders available per player (default: 4)
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  private readonly _maxUsedWondersTotal: number = 7; // The maximum number of usable wonders (default: 7)

  public get agesNumber(): number {
    return this._agesNumber;
  }

  public get availableWondersTotal(): number {
    return this._availableWondersTotal;
  }

  public get maxUsedWondersTotal(): number {
    return this._maxUsedWondersTotal;
  }
  public get availableWondersPerPlayer(): number {
    return this._availableWondersPerPlayer;
  }
}
