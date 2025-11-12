import { CreateAndRunGameUseCase } from '@usecases/create-and-run-game.usecase';
import { ICommand } from '@commands/abstract/command.interface';

export class PlayCommand implements ICommand {
  public execute(): void {
    const createAndRunGameUseCase: CreateAndRunGameUseCase =
      new CreateAndRunGameUseCase();
    createAndRunGameUseCase.handle();
  }
}
