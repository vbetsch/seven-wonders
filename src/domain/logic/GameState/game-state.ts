import { injectable } from 'tsyringe';
import type { PlayerType } from '@logic/Player/player.type';

@injectable()
export class GameState {
  private readonly _playerOne: PlayerType = {
    id: 1,
    warProgress: 0,
  };
  private readonly _playerTwo: PlayerType = {
    id: 2,
    warProgress: 0,
  };
  private readonly _players: PlayerType[] = [this._playerOne, this._playerTwo];

  get playerOne(): PlayerType {
    return this._playerOne;
  }
  get playerTwo(): PlayerType {
    return this._playerTwo;
  }
  get players(): PlayerType[] {
    return this._players;
  }
}
