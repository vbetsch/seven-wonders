import 'reflect-metadata';
import { container } from 'tsyringe';
import { PlayCommand } from '@commands/play/play.command';

describe('Play', () => {
  const command: PlayCommand = container.resolve(PlayCommand);

  it('should be well implemented', () => {
    expect(command).toBeTruthy();
    expect(command).toBeInstanceOf(PlayCommand);
    expect(command).toBeDefined();
  });
});
