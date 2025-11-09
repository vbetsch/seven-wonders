import { Game } from '@engine/Game/game';
import { Master } from './master';
import { GamePhase } from '@engine/Game/game-phase.enum';

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
    expect(game.phase).toStrictEqual(GamePhase.INSTALLING);
  });
  it('should not prepare a game without install', () => {
    const game: Game = new Game();
    const master: Master = new Master(game);
    expect(() => {
      master.prepare();
    }).toThrow(new Error('Impossible to go to next phase'));
  });
  it('should prepare a game', () => {
    const game: Game = new Game();
    const master: Master = new Master(game);
    master.install();
    master.prepare();
    expect(game.phase).toStrictEqual(GamePhase.PREPARING);
  });
  it('should not run a game without preparing and install', () => {
    const game: Game = new Game();
    const master: Master = new Master(game);
    expect(() => {
      master.run();
    }).toThrow(new Error('Impossible to go to next phase'));
  });
  it('should not run a game without preparing', () => {
    const game: Game = new Game();
    const master: Master = new Master(game);
    master.install();
    expect(() => {
      master.run();
    }).toThrow(new Error('Impossible to go to next phase'));
  });
  it('should run a game', () => {
    const game: Game = new Game();
    const master: Master = new Master(game);
    master.install();
    master.prepare();
    master.run();
    expect(game.phase).toStrictEqual(GamePhase.RUNNING);
  });
});
