import { ICard } from '@engine/Game/card';
import * as fs from 'fs';

export class Age {
  private _cards: Array<ICard>;
  public _index: number;
  public constructor(index: number) {
    this._index = index;
    this._cards = new Array<ICard>();
  }
  public getCardsForAge(index: number): Array<ICard> | void {
    this._index = index;
    const filePath: string = 'src/infra/age_' + index + '.json';
    fs.readFile(filePath, 'utf8', (err, jsonString: string = '') => {
      if (err) {
        console.error('Error reading file:', err);
        return;
      }
      this._cards = JSON.parse(jsonString);
      return this._cards;
    });
  }

  public start(): void {
    this.getCardsForAge(this._index);
  }
  public get index(): number {
    return this._index;
  }

  public set index(value: number) {
    this._index = value;
  }
}
