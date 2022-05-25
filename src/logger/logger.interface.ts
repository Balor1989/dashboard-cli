import { Logger } from 'tslog';

export interface ILogger {
	logger: Logger;
	log: (...args: unknown[]) => void;
	error: (...args: unknown[]) => void;
	warning: (...args: unknown[]) => void;
}
