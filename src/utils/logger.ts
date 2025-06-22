import type { LogType, LoggerType } from '@/types/logger';

/* eslint no-console: "off" */
export function logger(type: LoggerType, title: string, message: string | unknown): void {
  const logColors: LogType = {
    SUCCESS: '\x1b[32m',
    INFO: '\x1b[36m',
    WARNING: '\x1b[33m',
    ERROR: '\x1b[31m',
  };

  const logEmoji: LogType = {
    SUCCESS: '✅',
    INFO: '',
    WARNING: '⚠️',
    ERROR: '❌',
  };

  console.log(logColors[type]);
  console.log(`[${title}] ${logEmoji[type]} ${message}`);
  console.log('\x1b[0m');
  if (['ERROR', 'WARNING'].includes(type)) console.log(message);
}
