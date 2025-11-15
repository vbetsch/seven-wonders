import 'reflect-metadata';
import { container } from 'tsyringe';
import { CreateAndRunGameUseCase } from '@usecases/create-and-run-game/create-and-run-game.usecase';

describe('CreateAndRunGameUseCase', () => {
  const useCase: CreateAndRunGameUseCase = container.resolve(
    CreateAndRunGameUseCase
  );

  it('should be well implemented', () => {
    expect(useCase).toBeTruthy();
    expect(useCase).toBeInstanceOf(CreateAndRunGameUseCase);
    expect(useCase).toBeDefined();
  });
});
