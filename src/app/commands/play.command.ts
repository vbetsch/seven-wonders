import { CreateAndRunGameUseCase } from '../usecases/create-and-run-game.usecase';

export class PlayCommand {
  public execute(): void {
    const createAndRunGameUseCase: CreateAndRunGameUseCase =
      new CreateAndRunGameUseCase();
    createAndRunGameUseCase.handle();
  }
}
