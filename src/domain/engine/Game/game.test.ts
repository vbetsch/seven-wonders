import { Game } from './game';
import { GamePhase } from './game-phase.enum';

describe('Game', () => {
  it('should be well implemented', () => {
    const game: Game = new Game();
    expect(game).toBeDefined();
    expect(game).toBeInstanceOf(Game);
  });
  it('should have a phase', () => {
    const game: Game = new Game();
    expect(game.phase).toBeDefined();
    expect(game.phase).toStrictEqual(GamePhase.WAITING);
  });
});
