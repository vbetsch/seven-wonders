import { PlayCommand } from '@commands/play.command';
import { ICommand } from '@commands/abstract/command.interface';

const playCommand: ICommand = new PlayCommand();

console.log('--------- 7 WONDERS DUEL ---------');
playCommand.execute();
