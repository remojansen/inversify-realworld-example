import * as Pino from "pino";
import * as interfaces from "../interfaces";

const pino = Pino();

export class Logger implements interfaces.Logger {
    private readonly _pino: typeof pino;
    public constructor() {
        this._pino = pino;
    }
    public info(msg: string, ...args: any[]) {
        this._pino.info(msg, ...args)
    }
    public error(msg: string, ...args: any[]) {
        this._pino.error(msg, ...args)
    }
    public debug(msg: string, ...args: any[]) {
        this._pino.debug(msg, ...args)
    }
    public warn(msg: string, ...args: any[]) {
        this._pino.warn(msg, ...args)
    }
}
