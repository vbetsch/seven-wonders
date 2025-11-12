export interface ICard {
  id: string;
  name: string;
  category: string;
  cost: { coin: number };
  produces: { points: number };
  chainFrom: null;
  chainTo: string[];
  effect: string;
  symbol: string;
}
