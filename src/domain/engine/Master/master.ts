import { Game } from '@engine/Game/game';
import { GamePhase } from '@engine/Game/game-phase.enum';
import { Logger } from '@core/Logger/logger';
import { container } from 'tsyringe';
import { PlayerStatisticsType } from '@engine/Player/player-statistics.type';
import { Arbitrator } from '@engine/Arbitrator/arbitrator';
import { GameResultType } from '@engine/Game/game-result.type';

export class Master {
  private readonly _logger: Logger;
  private readonly _game: Game;

  // eslint-disable-next-line max-params
  private _nextPhase(previous: GamePhase, next: GamePhase): void {
    if (this._game.phase !== previous) {
      throw new Error('Impossible to go to next phase');
    }
    this._game.phase = next;
  }

  public constructor(game: Game) {
    this._logger = container.resolve(Logger);
    this._game = game;
  }

  public install(): void {
    this._nextPhase(GamePhase.WAITING, GamePhase.INSTALLING);
    this._logger.log('Installing the game...');
  }

  public prepare(): void {
    this._nextPhase(GamePhase.INSTALLING, GamePhase.PREPARING);
    this._logger.log('Preparing the game...');
  }

  public run(): void {
    this._nextPhase(GamePhase.PREPARING, GamePhase.RUNNING);
    this._logger.log('Running the game...');

    const arbitrator: Arbitrator = container.resolve(Arbitrator);
    // CASE 1
    this._logger.log('Arbitrator - CASE 1');
    const playerOneStatisticsCase1: PlayerStatisticsType = {
      id: 'Player 1',
      score: 32,
    };
    const playerTwoStatisticsCase1: PlayerStatisticsType = {
      id: 'Player 2',
      score: 45,
    };
    this._logger.log(
      `Arbitrator receives ${playerOneStatisticsCase1.score} for ${playerOneStatisticsCase1.id} and ${playerTwoStatisticsCase1.score} for ${playerTwoStatisticsCase1.id}`
    );
    const gameResultCase1: GameResultType | null = arbitrator.getGameResult([
      playerOneStatisticsCase1,
      playerTwoStatisticsCase1,
    ]);
    if (gameResultCase1) {
      this._logger.log(
        `Winner=${gameResultCase1.winner}, Loser=${gameResultCase1.losers[0]}`
      );
    } else {
      this._logger.log('Equality ! No winner, no loser');
    }

    // CASE 2
    this._logger.log('Arbitrator - CASE 2');
    const playerOneStatisticsCase2: PlayerStatisticsType = {
      id: 'Player 1',
      score: 53,
    };
    const playerTwoStatisticsCase2: PlayerStatisticsType = {
      id: 'Player 2',
      score: 29,
    };
    this._logger.log(
      `Arbitrator receives ${playerOneStatisticsCase2.score} for ${playerOneStatisticsCase2.id} and ${playerTwoStatisticsCase2.score} for ${playerTwoStatisticsCase2.id}`
    );
    const gameResultCase2: GameResultType | null = arbitrator.getGameResult([
      playerOneStatisticsCase2,
      playerTwoStatisticsCase2,
    ]);
    if (gameResultCase2) {
      this._logger.log(
        `Winner=${gameResultCase2.winner}, Loser=${gameResultCase2.losers[0]}`
      );
    } else {
      this._logger.log('Equality ! No winner, no loser');
    }
  }
}
