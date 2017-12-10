const path = require('path');
const bunyan = require('bunyan');

module.exports = {
  dbPath: path.join(__dirname, 'db.sqlite'),

  // logger
  logPath: path.join(__dirname, 'server.log.json'),
  logLevel: bunyan.INFO,
};
