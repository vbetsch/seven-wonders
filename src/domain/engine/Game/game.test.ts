import { Game } from './game';
import { GamePhase } from './game-phase.enum';

describe('Game', () => {
  let game: Game;

  beforeEach(() => {
    game = new Game();
  });

  it('should be well implemented', () => {
    expect(game).toBeDefined();
    expect(game).toBeInstanceOf(Game);
  });
  it('should have a phase', () => {
    expect(game.phase).toBeDefined();
    expect(game.phase).toStrictEqual(GamePhase.WAITING);
  });
});
