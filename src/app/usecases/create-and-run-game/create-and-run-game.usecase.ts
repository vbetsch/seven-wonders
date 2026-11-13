import { Game } from '@/domain/logic/Game/game';
import { Master } from '@/domain/logic/Master/master';
import type { IUseCase } from '@usecases/abstract/usecase.interface';
import { injectable } from 'tsyringe';

@injectable()
export class CreateAndRunGameUseCase implements IUseCase {
  public handle(): void {
    const gameCreated: Game = new Game();
    const gameMaster: Master = new Master(gameCreated);
    gameMaster.install();
    gameMaster.prepare();
    gameMaster.run();
  }
}
