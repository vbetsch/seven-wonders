import { Game } from '@engine/Game/game';
import { Master } from '@engine/Master/master';
import { IUseCase } from '@usecases/abstract/usecase.interface';

export class CreateAndRunGameUseCase implements IUseCase {
  public handle(): void {
    const gameCreated: Game = new Game();
    const gameMaster: Master = new Master(gameCreated);
    gameMaster.install();
    gameMaster.prepare();
    gameMaster.run();
  }
}
