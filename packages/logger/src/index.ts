import { pino, type LoggerOptions } from 'pino';

const loggerOptions: LoggerOptions = {
  level: process.env.LOG_LEVEL ?? 'silent',
  timestamp: pino.stdTimeFunctions.isoTime,
  base: {}, // disable default fields like pid and hostname
};

if (process.stdout.isTTY) {
  loggerOptions.transport = {
    target: 'pino-pretty',
    options: {
      translateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",
    },
  };
} else {
  loggerOptions.formatters = {
    level: (level) => ({ severity: level.toUpperCase() }),
  };
}
/**
 * The main application logger instance configured with environment-based options.
 * Use this logger to log messages throughout the application.
 *
 * @example
 * logger.info('Application started');
 */
export const logger = pino(loggerOptions);
