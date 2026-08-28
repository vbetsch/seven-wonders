import 'reflect-metadata';
import { GameLoop } from './game-loop';
import { Rules } from '@engine/Rules/rules';
import { container } from 'tsyringe';

describe('GameLoop', () => {
  let mockRules: jest.Mocked<Rules>;
  let loop: GameLoop;

  beforeEach(() => {
    mockRules = {
      agesCardsNumber: [42, 38, 54],
    } as unknown as jest.Mocked<Rules>;
    container.registerInstance(Rules, mockRules);

    loop = container.resolve(GameLoop);
  });

  afterEach(() => {
    container.clearInstances();
  });

  it('should run the expected number of ages', () => {
    loop.start();
  });
});
