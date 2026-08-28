import 'reflect-metadata';
import { container } from 'tsyringe';
import { GameLoop } from './game-loop';
import { Rules } from '@engine/Rules/rules';
import { Age } from '@engine/Age/age';

jest.mock('@engine/Age/age');

describe('GameLoop', () => {
  let mockRules: jest.Mocked<Rules>;
  let loop: GameLoop;
  const AgeMock = jest.mocked(Age);

  beforeEach(() => {
    mockRules = {
      agesCardsNumber: [42, 38, 54],
    } as unknown as jest.Mocked<Rules>;
    container.registerInstance(Rules, mockRules);
    loop = container.resolve(GameLoop);
  });

  afterEach(() => {
    container.clearInstances();
    jest.clearAllMocks();
  });

  it('should instanciate ages', () => {
    loop.start();

    expect(AgeMock).toHaveBeenCalledTimes(3);
    expect(AgeMock).toHaveBeenNthCalledWith(1, 1, 42);
    expect(AgeMock).toHaveBeenNthCalledWith(2, 2, 38);
    expect(AgeMock).toHaveBeenNthCalledWith(3, 3, 54);
  });
});
