import 'reflect-metadata';
import {
  describe,
  it,
  expect,
  beforeEach,
  afterEach,
  vi,
  type Mocked,
  type MockedFunction,
} from 'vitest';
import { container } from 'tsyringe';
import { GameLoop } from './game-loop';
import { Rules } from '@engine/Rules/rules';
import { Age } from '@engine/Age/age';

vi.mock('@engine/Age/age');

describe('GameLoop', () => {
  let mockRules: Mocked<Rules>;
  let loop: GameLoop;
  const AgeMock: MockedFunction<typeof Age> = vi.mocked(Age);

  beforeEach(() => {
    mockRules = {
      agesCardsNumbers: [42, 38, 54],
    } as unknown as Mocked<Rules>;

    container.registerInstance(Rules, mockRules);
    loop = container.resolve(GameLoop);
  });

  afterEach(() => {
    container.clearInstances();
    vi.clearAllMocks();
  });

  it('should instantiate ages', () => {
    loop.start();

    expect(AgeMock).toHaveBeenCalledTimes(3);
    expect(AgeMock).toHaveBeenNthCalledWith(1, 1, 42);
    expect(AgeMock).toHaveBeenNthCalledWith(2, 2, 38);
    expect(AgeMock).toHaveBeenNthCalledWith(3, 3, 54);
  });
});
