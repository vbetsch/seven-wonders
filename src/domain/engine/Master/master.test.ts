import { Game } from '@engine/Game/game';
import { Master } from './master';

describe('Master', () => {
  it('should be well implemented', () => {
    const game: Game = new Game();
    const master: Master = new Master(game);
    expect(master).toBeDefined();
    expect(master).toBeInstanceOf(Master);
  });
  it('should install a game', () => {
    const game: Game = new Game();
    const master: Master = new Master(game);
    master.install();
  });
  it('should prepare a game', () => {
    const game: Game = new Game();
    const master: Master = new Master(game);
    master.install();
    master.prepare();
  });
  it('should not prepare a game', () => {
    const game: Game = new Game();
    const master: Master = new Master(game);
    master.prepare();
  });
});
