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
import { AgesLoop } from './ages-loop';
import { Rules } from '@engine/Rules/rules';
import { Age } from '@engine/Age/age';

vi.mock('@engine/Age/age');

describe('AgesLoop', () => {
  let mockRules: Mocked<Rules>;
  let loop: AgesLoop;
  const ageMock: MockedFunction<typeof Age> = vi.mocked(Age);

  beforeEach(() => {
    mockRules = {
      agesCardsNumbers: [42, 38, 54],
    } as unknown as Mocked<Rules>;

    container.registerInstance(Rules, mockRules);
    loop = container.resolve(AgesLoop);
  });

  afterEach(() => {
    container.clearInstances();
    vi.clearAllMocks();
  });

  it('should instantiate ages', () => {
    loop.start();

    expect(ageMock).toHaveBeenCalledTimes(3);
    expect(ageMock).toHaveBeenNthCalledWith(1, 1, 42);
    expect(ageMock).toHaveBeenNthCalledWith(2, 2, 38);
    expect(ageMock).toHaveBeenNthCalledWith(3, 3, 54);
  });
});
