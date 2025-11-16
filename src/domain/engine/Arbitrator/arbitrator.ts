import { inject, injectable } from 'tsyringe';
import { Rules } from '@engine/Rules/rules';

@injectable()
export class Arbitrator {
  public constructor(@inject(Rules) private readonly _rules: Rules) {}
}
