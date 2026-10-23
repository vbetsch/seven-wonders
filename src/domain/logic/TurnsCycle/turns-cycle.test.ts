import 'reflect-metadata';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { TurnsCycle } from './turns-cycle';

const { startMock } = vi.hoisted(() => ({
  startMock: vi.fn<() => boolean>(),
}));

vi.mock('@/domain/logic/TurnsLoop/turns-loop', () => ({
  TurnsLoop: class {
    public start = startMock;
  },
}));

describe('TurnsCycle', () => {
  let cycle: TurnsCycle;

  beforeEach(() => {
    cycle = new TurnsCycle();
  });

  afterEach(() => {
    startMock.mockReset();
  });

  it('should start turns loop three times', () => {
    // Arrange
    startMock.mockReturnValueOnce(true).mockReturnValueOnce(true).mockReturnValueOnce(false);

    // Act
    const result = cycle.launch();

    // Assert
    expect(result).toBe(false);
    expect(startMock).toHaveBeenCalledTimes(3);
  });
});
