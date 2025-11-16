import { GameLoop } from './game-loop';
import { Logger } from '@core/Logger/logger';
import { Rule } from '@engine/Rule/rule';

jest.mock('@core/Logger/logger');

describe('GameLoop', () => {
  it('should run the expected number of ages', () => {
    const mockLogger = { log: jest.fn() };
    (Logger as jest.Mock).mockReturnValue(mockLogger);

    const loop = new GameLoop();
    const rule = new Rule();

    loop.start();

    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    expect(mockLogger.log).toHaveBeenCalledTimes(rule.agesNumber * 2);

    for (let i = 1; i <= rule.agesNumber; i++) {
      expect(mockLogger.log).toHaveBeenCalledWith(`age ${i}  started`);
      expect(mockLogger.log).toHaveBeenCalledWith(`age ${i}  finished`);
    }
  });
});
