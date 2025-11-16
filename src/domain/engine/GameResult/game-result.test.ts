import { GameResult } from './game-result';

describe('GameResult', () => {
  let gameResult: GameResult;

  beforeEach(() => {
    gameResult = new GameResult();
  });

  it('should be well implemented', () => {
    expect(gameResult).toBeTruthy();
    expect(gameResult).toBeInstanceOf(GameResult);
    expect(gameResult).toBeDefined();
  });
});
