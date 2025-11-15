import { LoggerColorEnum } from './logger-color.enum';
import { injectable } from 'tsyringe';

@injectable()
export class Logger {
  private readonly _prefix: string = '➔';

  // eslint-disable-next-line max-params
  private _compute(message?: string, color?: LoggerColorEnum): string | void {
    const content: string = `${this._prefix} ${message}`;
    if (color) {
      return `${color}${content}${LoggerColorEnum.RESET}`;
    }
    return content;
  }

  public success(message: string): void {
    console.log(this._compute(message, LoggerColorEnum.SUCCESS));
  }

  public fail(message: string): void {
    console.log(this._compute(message, LoggerColorEnum.FAIL));
  }

  public log(message: string): void {
    console.log(this._compute(message));
  }

  public debug(message: string): void {
    console.debug(this._compute(message, LoggerColorEnum.DEBUG));
  }

  public info(message: string): void {
    console.info(this._compute(message, LoggerColorEnum.INFO));
  }

  public warn(message: string): void {
    console.warn(this._compute(message, LoggerColorEnum.WARNING));
  }

  public error(message: string): void {
    console.error(this._compute(message, LoggerColorEnum.ERROR));
  }
}
