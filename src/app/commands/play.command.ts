import { CreateAndRunGameUsecase } from '../usecases/create-and-run-game.usecase';

export class PlayCommand {
  public execute(): void {
    const createGameUseCase: CreateAndRunGameUsecase =
      new CreateAndRunGameUsecase();
    createGameUseCase.handle();
  }
}
