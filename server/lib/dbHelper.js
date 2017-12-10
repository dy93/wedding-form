const sqlite3 = require('sqlite3');
const config = require('../config');
const logger = require('./logger');

const initialized = Symbol('initialized');

const db = new sqlite3.Database(config.dbPath, (err) => {
  if (err) {
    logger.error(err, 'create db failed');
    process.exit(-1);
  }
});

module.exports = {
  init: function init() {
    return new Promise((resolve, reject) => db.exec(`
      CREATE TABLE IF NOT EXISTS form (
        name TEXT(256),
        attend INTEGER(1),
        invitor TEXT(6),
        relation TEXT(100),
        address TEXT(256),
        email TEXT(256),
        people INTEGER(1),
        vegetable INTEGER(1),
        memo TEXT(1024)
      )`, (err) => {
        if (err) {
          logger.error(err, 'create table failed');
          return reject(err);
        }
        this[initialized] = true;
        return resolve();
      }));
  },

  getAsync: async function getAsync(sql, param) {
    if (!this[initialized]) {
      throw new Error(`db has not initialized when exeuting sql: ${sql} with param: ${param}`);
    }
    return new Promise((resolve, reject) => db.get(sql, param, (err, row) => {
      if (err) {
        return reject(err);
      }
      return resolve(row);
    }));
  },

  execAsync: async function execAsync(sql) {
    if (!this[initialized]) {
      throw new Error(`db has not initialized when exeuting sql: ${sql}`);
    }
    return new Promise((resolve, reject) => db.exec(sql, (err) => {
      if (err) {
        return reject(err);
      }
      return resolve();
    }));
  },
};
