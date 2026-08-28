export class Age {
  private readonly _identifier: number;

  public constructor(identifier: number) {
    this._identifier = identifier;
  }

  public get identifier(): number {
    return this._identifier;
  }
}
