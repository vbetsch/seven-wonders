export class Age {
  public _structure: Array<boolean> = [];
  public _cards: Array<string> = [];
  // eslint-disable-next-line max-params
  public constructor(
    structure: Array<boolean> = [],
    cards: Array<string> = []
  ) {
    this._structure = structure;
    this._cards = cards;
  }
}
