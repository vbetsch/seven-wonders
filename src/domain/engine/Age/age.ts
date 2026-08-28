export class Age {
  private readonly _identifier: number;

  public constructor(identifier: number): void {
    this._identifier = identifier;
  }

  public get identifier(): number {
    return this._identifier;
  }
}
