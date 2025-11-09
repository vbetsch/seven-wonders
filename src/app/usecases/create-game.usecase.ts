import { Game } from '@engine/Game/game';
import { Master } from '@engine/Master/master';

export class CreateGameUseCase {
  public handle(): void {
    const gameCreated = new Game();
    const gameMaster: Master = new Master(gameCreated);
    gameMaster.install();
    gameMaster.prepare();
    gameMaster.run();
  }
}
