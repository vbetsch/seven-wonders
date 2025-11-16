import 'reflect-metadata';
import { GameLoop } from './game-loop';
import { Logger } from '@core/Logger/logger';
import { Rules } from '@engine/Rules/rules';
import { container } from 'tsyringe';

jest.mock('@core/Logger/logger');

describe('GameLoop', () => {
  let rules: Rules;
  let mockLogger: jest.Mocked<Logger>;
  beforeEach(() => {
    rules = container.resolve(Rules);
    mockLogger = {
      log: jest.fn(),
    } as unknown as jest.Mocked<Logger>;

    container.registerInstance(Logger, mockLogger);
  });

  afterEach(() => {
    container.clearInstances();
  });
  it('should run the expected number of ages', () => {
    const loop: GameLoop = new GameLoop();
    loop.start();

    for (let i: number = 1; i <= rules.agesNumber; i++) {
      expect(mockLogger.log).toHaveBeenCalledWith(`age ${i}  started`);
      expect(mockLogger.log).toHaveBeenCalledWith(`age ${i}  finished`);
    }
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    expect(mockLogger.log).toHaveBeenCalledTimes(rules.agesNumber * 2);
  });
});
