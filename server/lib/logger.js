const bunyan = require('bunyan');
const fs = require('fs');
const config = require('../config');

const logger = bunyan.createLogger({
  name: 'wedding-form',
  level: config.logLevel,
  streams: [
    {
      type: 'rotating-file', // implied if the stream field is given.
      path: config.logPath,
      period: '1m',
      count: 10,
      level: config.logLevel,
      name: 'stdlog', // can use logger.levels('stdlog', bunyan.DEBUG) to set level
    },
  ],
  src: true,
});

if (process.env.NODE_ENV === 'DEBUG') {
  logger.addStream({
    stream: process.stdout,
    level: bunyan.DEBUG,
    name: 'debug',
  });
}

module.exports = logger;
