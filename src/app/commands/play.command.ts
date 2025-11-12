import { CreateAndRunGameUseCase } from '@usecases/create-and-run-game.usecase';
import { ICommand } from '@commands/abstract/command.interface';
import { IUseCase } from '@usecases/abstract/usecase.interface';

export class PlayCommand implements ICommand {
  public execute(): void {
    const createAndRunGameUseCase: IUseCase = new CreateAndRunGameUseCase();
    createAndRunGameUseCase.handle();
  }
}
