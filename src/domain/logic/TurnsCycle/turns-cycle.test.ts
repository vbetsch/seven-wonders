import 'reflect-metadata';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { TurnsCycle } from './turns-cycle';
import { EventEnum } from '@logic/Event/event.enum';

const { startMock } = vi.hoisted(() => ({
  startMock: vi.fn<() => EventEnum>(),
}));

vi.mock('@/domain/logic/TurnsLoop/turns-loop', () => ({
  TurnsLoop: class {
    public start = startMock;
  },
}));

describe('TurnsCycle', () => {
  let cycle: TurnsCycle;

  beforeEach(() => {
    cycle = new TurnsCycle(3);
  });

  afterEach(() => {
    startMock.mockReset();
  });

  it('should start turns loop without stopping', () => {
    // Arrange
    startMock.mockReturnValueOnce(EventEnum.GAME_CONTINUES);

    // Act
    cycle.launch();

    // Assert
    expect(startMock).toHaveBeenCalledTimes(2);
  });

  it('should start turns loop three times - AGE_IS_FINISHED', () => {
    // Arrange
    startMock
      .mockReturnValueOnce(EventEnum.GAME_CONTINUES)
      .mockReturnValueOnce(EventEnum.GAME_CONTINUES)
      .mockReturnValueOnce(EventEnum.AGE_IS_FINISHED);

    // Act
    const result: EventEnum = cycle.launch();

    // Assert
    expect(result).toBe(EventEnum.AGE_IS_FINISHED);
    expect(startMock).toHaveBeenCalledTimes(3);
  });

  it('should start turns loop three times - WAR_IS_FINISHED', () => {
    // Arrange
    startMock
      .mockReturnValueOnce(EventEnum.GAME_CONTINUES)
      .mockReturnValueOnce(EventEnum.GAME_CONTINUES)
      .mockReturnValueOnce(EventEnum.WAR_IS_FINISHED);

    // Act
    const result: EventEnum = cycle.launch();

    // Assert
    expect(result).toBe(EventEnum.WAR_IS_FINISHED);
    expect(startMock).toHaveBeenCalledTimes(3);
  });
});
