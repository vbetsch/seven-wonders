export class Rule {
  private static readonly _ages = {
    COUNT: 3,
    CARDS_PER_AGE: 20,
  };

  private static readonly _wonders = {
    TOTAL: 12,
    PER_PLAYER: 4,
    MAX_USED: 7,
  };

  public static get ages(): { COUNT: number; CARDS_PER_AGE: number } {
    return this._ages;
  }
  public static get wonders(): {
    TOTAL: number;
    PER_PLAYER: number;
    MAX_USED: number;
  } {
    return this._wonders;
  }

}
