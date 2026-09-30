import 'reflect-metadata';
import { describe, it, expect, beforeEach, afterEach, vi, type MockInstance } from 'vitest';
import { Game } from './game';
import { GamePhase } from './game-phase.enum';
import { AgesLoop } from '@engine/AgesLoop/ages-loop';

describe('Game', () => {
  let agesLoopStartSpy: MockInstance;
  let game: Game;

  beforeEach(() => {
    agesLoopStartSpy = vi.spyOn(AgesLoop.prototype, 'start');
    game = new Game();
  });

  afterEach(() => {
    agesLoopStartSpy.mockRestore();
  });

  it('should be well implemented', () => {
    expect(game).toBeDefined();
    expect(game).toBeInstanceOf(Game);
  });

  it('should have a defined phase', () => {
    expect(game.phase).toBeDefined();
    expect(game.phase).toStrictEqual(GamePhase.WAITING);
  });

  it('should set a phase', () => {
    expect(game.phase).toBeDefined();
    game.phase = GamePhase.ENDING;
    expect(game.phase).toBe(GamePhase.ENDING);
  });

  it('should start the loop', () => {
    game.run();
    expect(agesLoopStartSpy).toHaveBeenCalledOnce();
  });
});
