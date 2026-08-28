import { Game } from './game';
import { GamePhase } from './game-phase.enum';
import { GameLoop } from '@engine/GameLoop/game-loop';

describe('Game', () => {
  let gameLoopStartSpy: jest.SpyInstance;
  let game: Game;

  beforeEach(() => {
    gameLoopStartSpy = jest.spyOn(GameLoop.prototype, 'start');
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

  it('should start the loop', () => {
    game.run();
    expect(gameLoopStartSpy).toHaveBeenCalledTimes(1);
  });
});
