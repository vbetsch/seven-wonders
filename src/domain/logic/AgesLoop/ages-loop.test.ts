import 'reflect-metadata';
import { describe, it, expect, beforeEach, afterEach, vi, type Mocked } from 'vitest';
import { container } from 'tsyringe';
import { AgesLoop } from './ages-loop';
import { Rules } from '@/domain/logic/Rules/rules';
import { Age } from '@/domain/logic/Age/age';
import { EventEnum } from '@logic/Event/event.enum';

const { beginMock } = vi.hoisted(() => ({
  beginMock: vi.fn<() => EventEnum.AGE_IS_FINISHED | EventEnum.WAR_IS_FINISHED>(),
}));

vi.mock('@logic/Age/age', () => ({
  Age: vi.fn(function () {
    return { begin: beginMock };
  }),
}));

describe('AgesLoop', () => {
  let mockRules: Mocked<Rules>;
  let loop: AgesLoop;

  beforeEach(() => {
    mockRules = {
      agesCardsNumbers: [42, 38, 54],
    } as unknown as Mocked<Rules>;

    container.registerInstance(Rules, mockRules);
    loop = new AgesLoop();
  });

  afterEach(() => {
    beginMock.mockReset();
    container.clearInstances();
    vi.clearAllMocks();
  });

  it('should instantiate ages and begin ages', () => {
    beginMock.mockReturnValueOnce(EventEnum.AGE_IS_FINISHED);

    loop.start();

    expect(beginMock).toHaveBeenCalledTimes(3);
    expect(Age).toHaveBeenCalledTimes(3);
    expect(Age).toHaveBeenNthCalledWith(1, 1, 42);
    expect(Age).toHaveBeenNthCalledWith(2, 2, 38);
    expect(Age).toHaveBeenNthCalledWith(3, 3, 54);
  });
});
