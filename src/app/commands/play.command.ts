import { CreateGameUseCase } from '../usecases/create-game.usecase';

export class PlayCommand {
  public execute(): void {
    const createGameUseCase: CreateGameUseCase = new CreateGameUseCase();
    createGameUseCase.handle();
  }
}
