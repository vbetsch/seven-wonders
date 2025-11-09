import { ProfileParams } from '@engine/Profile/profile.params';
import { Game } from '@engine/Game/game';

export class Profile {
  private readonly _name: string;

  public constructor(params: ProfileParams) {
    this._name = params.name;
  }

  public get name(): string {
    return this._name;
  }

  public play(): void {
    new Game();
  }
}
