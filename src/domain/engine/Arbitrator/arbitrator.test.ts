import 'reflect-metadata';
import { container } from 'tsyringe';
import { Arbitrator } from './arbitrator';

describe('Arbitrator', () => {
  let arbitrator: Arbitrator;

  beforeEach(() => {
    arbitrator = container.resolve(Arbitrator);
  });

  afterEach(() => {
    container.clearInstances();
  });

  it('should be well implemented', () => {
    expect(arbitrator).toBeTruthy();
    expect(arbitrator).toBeInstanceOf(Arbitrator);
    expect(arbitrator).toBeDefined();
  });
});
