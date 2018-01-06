const sqlite3 = require('sqlite3');
const config = require('../config');
const logger = require('./logger');

const initialized = Symbol('initialized');
const init = Symbol('init');

const db = new sqlite3.Database(config.dbPath, (err) => {
  if (err) {
    logger.error(err, 'create db failed');
    process.exit(-1);
  }
});

class DBHelper {
  [init]() {
    if (this[initialized]) {
      return Promise.resolve();
    }

    return new Promise((resolve, reject) => db.exec(`
      CREATE TABLE IF NOT EXISTS form (
        name TEXT(256),
        attend TEXT(8),
        invitor TEXT(8),
        relation TEXT(100),
        people INTEGER(1),
        vegetable INTEGER(1),
        baby_seats INTEGER(1),
        need_invitation TEXT(8),
        address TEXT(256),
        email TEXT(256),
        memo TEXT(1024),
        create_time TEXT(64)
      )`, (err) => {
        if (err) {
          logger.error(err, 'create table failed');
          return reject(err);
        }
        this[initialized] = true;
        return resolve();
      }));
  }

  getAsync(sql, params) {
    return this[init]()
      .then(() => new Promise((resolve, reject) => db.get(sql, params, (err, row) => {
        if (err) {
          logger.error(err, `${sql} with ${params} faild`);
          return reject(err);
        }
        return resolve(row);
      })));
  }

  execAsync(sql, params) {
    return this[init]()
      .then(() => new Promise((resolve, reject) => {
        db.run(sql, params, (err) => {
          if (err) {
            logger.error(err, `${sql} with ${params} faild`);
            return reject(err);
          }
          return resolve();
        });
      }));
  }
}

module.exports = new DBHelper();
