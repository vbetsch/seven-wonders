export class Rule {
  private readonly _agesNumber: number = 3;
  private readonly _availableWonders: number = 12;
  private readonly _availablePerPlayer: number = 4;
  private readonly _maxUsedWonders: number = 7;

  public get agesNumber(): number {
    return this._agesNumber;
  }

  public get availableWonders(): number {
    return this._availableWonders;
  }

  public get maxUsed(): number {
    return this._maxUsedWonders;
  }
  public get availablePerPlayer(): number {
    return this._availablePerPlayer;
  }
}
