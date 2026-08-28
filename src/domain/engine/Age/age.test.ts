import 'reflect-metadata';
import { container } from 'tsyringe';
import { Logger } from '@core/Logger/logger';
import { Age } from './age';

describe('Age', () => {
  let mockLogger: jest.Mocked<Logger>;
  let age: Age;

  beforeEach(() => {
    mockLogger = {
      log: jest.fn(),
    } as unknown as jest.Mocked<Logger>;
    container.registerInstance(Logger, mockLogger);
    age = new Age(1, 12);
  });

  it('should be well implemented', () => {
    expect(age).toBeDefined();
    expect(age).toBeInstanceOf(Age);
  });

  it('should have an identifier', () => {
    expect(age.identifier).toBeDefined();
    expect(age.identifier).toBe(1);
  });

  it('should have a number of cards', () => {
    expect(age.cardsNumber).toBeDefined();
    expect(age.cardsNumber).toBe(12);
  });

  it('should log during instantiation', () => {
    expect(mockLogger.log).toHaveBeenCalledWith('Age 1 started');
    expect(mockLogger.log).toHaveBeenCalledWith(
      'There are 12 cards to discover during this age !'
    );
    expect(mockLogger.log).toHaveBeenCalledWith('Age 1 finished');
  });
});
