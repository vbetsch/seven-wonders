import { Game } from '@engine/Game/game';
import { Master } from '@engine/Master/master';

export class CreateGameUseCase {
  public handle(): void {
    const game = new Game();
    const master: Master = new Master(game);
    master.install();
    master.prepare();
  }
}
