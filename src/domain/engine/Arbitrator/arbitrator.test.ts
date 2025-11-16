import 'reflect-metadata';
import { container } from 'tsyringe';
import { Arbitrator } from './arbitrator';
import { GameResultType } from '@engine/Game/game-result.type';

describe('Arbitrator', () => {
  let arbitrator: Arbitrator;

  beforeEach(() => {
    arbitrator = container.resolve(Arbitrator);
  });

  afterEach(() => {
    container.clearInstances();
  });

  it('should be well implemented', () => {
    expect(arbitrator).toBeTruthy();
    expect(arbitrator).toBeInstanceOf(Arbitrator);
    expect(arbitrator).toBeDefined();
  });

  it('should get game result', () => {
    const gameResult: GameResultType = {
      winner: 'Player 1',
      loser: 'Player 2',
    };
    expect(arbitrator.getGameResult()).toStrictEqual(gameResult);
  });
});
