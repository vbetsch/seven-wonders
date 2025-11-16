import 'reflect-metadata';
import { Game } from '@engine/Game/game';
import { Master } from './master';
import { GamePhase } from '@engine/Game/game-phase.enum';
import { Logger } from '@core/Logger/logger';

describe('Master', () => {
  let game: Game;
  let master: Master;
  let loggerLogSpy: jest.SpyInstance;

  beforeEach(() => {
    game = new Game();
    master = new Master(game);
    loggerLogSpy = jest.spyOn(Logger.prototype, 'log');
  });
  afterEach(() => {
    loggerLogSpy.mockRestore();
  });

  it('should be well implemented', () => {
    expect(master).toBeDefined();
    expect(master).toBeInstanceOf(Master);
  });
  it('should install a game', () => {
    master.install();
    expect(game.phase).toStrictEqual(GamePhase.INSTALLING);
    expect(loggerLogSpy).toHaveBeenCalledWith(
      expect.stringContaining('Installing the game')
    );
  });
  it('should not prepare a game without install', () => {
    expect(() => {
      master.prepare();
    }).toThrow(new Error('Impossible to go to next phase'));
  });
  it('should prepare a game', () => {
    master.install();
    master.prepare();
    expect(game.phase).toStrictEqual(GamePhase.PREPARING);
    expect(loggerLogSpy).toHaveBeenCalledWith(
      expect.stringContaining('Preparing the game')
    );
  });
  it('should not run a game without preparing and install', () => {
    expect(() => {
      master.run();
    }).toThrow(new Error('Impossible to go to next phase'));
  });
  it('should not run a game without preparing', () => {
    master.install();
    expect(() => {
      master.run();
    }).toThrow(new Error('Impossible to go to next phase'));
  });
  it('should run a game', () => {
    master.install();
    master.prepare();
    master.run();
    expect(game.phase).toStrictEqual(GamePhase.RUNNING);
    expect(loggerLogSpy).toHaveBeenCalledWith(
      expect.stringContaining('Running the game')
    );
  });
});
