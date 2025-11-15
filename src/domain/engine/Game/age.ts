export class Age {
  public _structure: Array<boolean> = [];
  public _cards: Array<string> = [];
  public constructor(
    structure: Array<boolean> = [],
    cards: Array<string> = []
  ) {
    this._structure = structure;
    this._cards = cards;
  }
}
