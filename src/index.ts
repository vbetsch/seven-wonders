import 'reflect-metadata';
import { PlayCommand } from '@commands/play.command';
import { ICommand } from '@commands/abstract/command.interface';
import { container } from 'tsyringe';

const playCommand: ICommand = container.resolve(PlayCommand);

console.log('--------- 7 WONDERS DUEL ---------');
playCommand.execute();
