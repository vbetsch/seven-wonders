import 'reflect-metadata';
import { container } from 'tsyringe';
import { PlayCommand } from '@commands/play/play.command';
import { CreateAndRunGameUseCase } from '@usecases/create-and-run-game/create-and-run-game.usecase';
import { IUseCase } from '@usecases/abstract/usecase.interface';

describe('Play', () => {
  let command: PlayCommand;
  let mockUseCase: jest.Mocked<IUseCase>;

  beforeEach(() => {
    mockUseCase = {
      handle: jest.fn(),
    } satisfies IUseCase as jest.Mocked<IUseCase>;

    container.clearInstances();
    container.registerInstance(CreateAndRunGameUseCase, mockUseCase);

    command = container.resolve(PlayCommand);
  });

  afterEach(() => {
    container.clearInstances();
  });

  it('should be well implemented', () => {
    expect(command).toBeTruthy();
    expect(command).toBeInstanceOf(PlayCommand);
    expect(command).toBeDefined();
  });

  it('should call the use case handle method when execute is called', () => {
    command.execute();
    expect(mockUseCase.handle).toHaveBeenCalledTimes(1);
    expect(mockUseCase.handle).toHaveBeenCalledWith();
  });
});
