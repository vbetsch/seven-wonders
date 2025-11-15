import { CreateAndRunGameUseCase } from '@usecases/create-and-run-game.usecase';
import { ICommand } from '@commands/abstract/command.interface';
import { IUseCase } from '@usecases/abstract/usecase.interface';
import { inject, injectable } from 'tsyringe';

@injectable()
export class PlayCommand implements ICommand {
  public constructor(
    @inject(CreateAndRunGameUseCase)
    private readonly _createAndRunGameUseCase: IUseCase
  ) {}

  public execute(): void {
    this._createAndRunGameUseCase.handle();
  }
}
