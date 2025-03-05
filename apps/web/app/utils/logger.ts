export enum LogLevel {
  DEBUG = "debug",
  INFO = "info",
  WARN = "warn",
  ERROR = "error",
}

export class Logger {
  private static logLevel: LogLevel = LogLevel.DEBUG; // Default log level

  static setLogLevel(level: LogLevel): void {
    Logger.logLevel = level;
  }

  static debug(message: string, data?: any): void {
    Logger.log(LogLevel.DEBUG, message, data);
  }

  static info(message: string, data?: any): void {
    Logger.log(LogLevel.INFO, message, data);
  }

  static warn(message: string, data?: any): void {
    Logger.log(LogLevel.WARN, message, data);
  }

  static error(message: string, data?: any): void {
    Logger.log(LogLevel.ERROR, message, data);
  }

  private static log(level: LogLevel, message: string, data?: any): void {
    if (Logger.shouldLog(level)) {
      const logMessage = `[${level.toUpperCase()}] ${message}`;
      if (data) {
        console.log(logMessage, data);
      } else {
        console.log(logMessage);
      }
    }
  }

  private static shouldLog(level: LogLevel): boolean {
    const levels = [
      LogLevel.DEBUG,
      LogLevel.INFO,
      LogLevel.WARN,
      LogLevel.ERROR,
    ];
    return levels.indexOf(level) >= levels.indexOf(Logger.logLevel);
  }
}
