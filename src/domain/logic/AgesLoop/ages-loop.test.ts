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
  type MockInstance,
} from 'vitest';
import { container } from 'tsyringe';
import { AgesLoop } from './ages-loop';
import { Rules } from '@/domain/logic/Rules/rules';
import { Age } from '@/domain/logic/Age/age';

vi.mock('@logic/Age/age');

describe('AgesLoop', () => {
  let ageBeginSpy: MockInstance;
  let mockRules: Mocked<Rules>;
  let loop: AgesLoop;
  const ageMock: MockedFunction<typeof Age> = vi.mocked(Age);

  beforeEach(() => {
    ageBeginSpy = vi.spyOn(Age.prototype, 'begin');
    mockRules = {
      agesCardsNumbers: [42, 38, 54],
    } as unknown as Mocked<Rules>;

    container.registerInstance(Rules, mockRules);
    loop = new AgesLoop();
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
  it('should begin ages', () => {
    loop.start();

    expect(ageBeginSpy).toHaveBeenCalledTimes(3);
  });
});
