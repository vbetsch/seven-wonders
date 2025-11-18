import 'reflect-metadata';
import { GameLoop } from './game-loop';
import { Logger } from '@core/Logger/logger';
import { Rules } from '@engine/Rules/rules';
import { container } from 'tsyringe';

describe('GameLoop', () => {
  let mockRules: jest.Mocked<Rules>;
  let mockLogger: jest.Mocked<Logger>;
  let loop: GameLoop;

  beforeEach(() => {
    mockLogger = {
      log: jest.fn(),
    } as unknown as jest.Mocked<Logger>;
    container.registerInstance(Logger, mockLogger);

    mockRules = {
      agesNumber: 3,
    } as unknown as jest.Mocked<Rules>;
    container.registerInstance(Rules, mockRules);

    loop = container.resolve(GameLoop);
  });

  afterEach(() => {
    container.clearInstances();
  });

  it('should run the expected number of ages', () => {
    loop.start();

    for (let i: number = 1; i <= mockRules.agesNumber; i++) {
      expect(mockLogger.log).toHaveBeenCalledWith(`Age ${i}  started`);
      expect(mockLogger.log).toHaveBeenCalledWith(`Age ${i}  finished`);
    }
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    expect(mockLogger.log).toHaveBeenCalledTimes(mockRules.agesNumber * 2);
  });
});
