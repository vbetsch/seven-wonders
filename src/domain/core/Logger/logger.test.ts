import 'reflect-metadata';
import { Logger } from './logger';
import { LoggerColorEnum } from './logger-color.enum';
import { container } from 'tsyringe';

describe('Logger', () => {
  const logger: Logger = container.resolve(Logger);
  let consoleLogSpy: jest.SpyInstance;
  let consoleDebugSpy: jest.SpyInstance;
  let consoleInfoSpy: jest.SpyInstance;
  let consoleWarnSpy: jest.SpyInstance;
  let consoleErrorSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
    consoleDebugSpy = jest.spyOn(console, 'debug').mockImplementation();
    consoleInfoSpy = jest.spyOn(console, 'info').mockImplementation();
    consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('success', () => {
    it('should display a success message with the appropriate color', () => {
      const message: string = 'Operation successful';
      logger.success(message);

      expect(consoleLogSpy).toHaveBeenCalledTimes(1);
      expect(consoleLogSpy).toHaveBeenCalledWith(
        `${LoggerColorEnum.SUCCESS}➔ ${message}${LoggerColorEnum.RESET}`
      );
    });
  });

  describe('fail', () => {
    it('should display a failure message with the appropriate color', () => {
      const message: string = 'Operation failed';
      logger.fail(message);

      expect(consoleLogSpy).toHaveBeenCalledTimes(1);
      expect(consoleLogSpy).toHaveBeenCalledWith(
        `${LoggerColorEnum.FAIL}➔ ${message}${LoggerColorEnum.RESET}`
      );
    });
  });

  describe('log', () => {
    it('should display a simple message without color', () => {
      const message: string = 'Standard message';
      logger.log(message);

      expect(consoleLogSpy).toHaveBeenCalledTimes(1);
      expect(consoleLogSpy).toHaveBeenCalledWith(`➔ ${message}`);
    });
  });

  describe('debug', () => {
    it('should display a debug message with the appropriate color', () => {
      const message: string = 'Debug message';
      logger.debug(message);

      expect(consoleDebugSpy).toHaveBeenCalledTimes(1);
      expect(consoleDebugSpy).toHaveBeenCalledWith(
        `${LoggerColorEnum.DEBUG}➔ ${message}${LoggerColorEnum.RESET}`
      );
    });
  });

  describe('info', () => {
    it('should display an information message with the appropriate color', () => {
      const message: string = 'Information message';
      logger.info(message);

      expect(consoleInfoSpy).toHaveBeenCalledTimes(1);
      expect(consoleInfoSpy).toHaveBeenCalledWith(
        `${LoggerColorEnum.INFO}➔ ${message}${LoggerColorEnum.RESET}`
      );
    });
  });

  describe('warn', () => {
    it('should display a warning message with the appropriate color', () => {
      const message: string = 'Warning message';
      logger.warn(message);

      expect(consoleWarnSpy).toHaveBeenCalledTimes(1);
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        `${LoggerColorEnum.WARNING}➔ ${message}${LoggerColorEnum.RESET}`
      );
    });
  });

  describe('error', () => {
    it('should display an error message with the appropriate color', () => {
      const message: string = 'Error message';
      logger.error(message);

      expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        `${LoggerColorEnum.ERROR}➔ ${message}${LoggerColorEnum.RESET}`
      );
    });
  });

  describe('_compute (indirect tests)', () => {
    it('should prefix all messages with ➔', () => {
      const message: string = 'Test';
      logger.log(message);

      expect(consoleLogSpy).toHaveBeenCalledWith(
        expect.stringContaining('➔ Test')
      );
    });

    it('should handle empty strings', () => {
      logger.log('');

      expect(consoleLogSpy).toHaveBeenCalledWith('➔ ');
    });
  });
});
