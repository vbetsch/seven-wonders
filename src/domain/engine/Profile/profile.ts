import { ProfileParams } from '@engine/Profile/profile.params';
import { Game } from '@engine/Game/game';
import { Master } from '@engine/Master/master';

export class Profile {
  private readonly _name: string;

  public constructor(params: ProfileParams) {
    this._name = params.name;
  }

  public get name(): string {
    return this._name;
  }

  public play(): void {
    const game = new Game();
    const master: Master = new Master(game);
    master.install();
    master.prepare();
  }
}
