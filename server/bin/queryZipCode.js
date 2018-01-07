#!/usr/bin/env node
const yargs = require('yargs');
const qs = require('querystring');
const axios = require('axios').default;
const dbHelper = require('../lib/dbHelper');

async function sleep(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function main() {
  yargs
    .usage('usage: $0')
    .example('$0', 'add 3+2 zip code to address field in database')
    .help();
  const rows = await dbHelper.getAllAsync(`
    SELECT rowid, address
    FROM form
  `);

  /* eslint-disable no-await-in-loop */
  for (const row of rows) { // eslint-disable-line no-restricted-syntax
    if (row.address !== '') {
      try {
        const res = await axios.get(`http://zip5.5432.tw/zip5json.py?adrs=${qs.escape(row.address)}`);
        await dbHelper.execAsync(`
          UPDATE form SET zip_code = $zipCode
          WHERE ROWID = $rowid
          `, {
            $zipCode: res.data.zipcode,
            $rowid: row.rowid,
          });
        console.log(`add zip code: ${res.data.zipcode} to ${row.address}`);
        await sleep(1500);
      } catch (e) {
        console.log(e);
      }
    }
  }
  /* eslint-enable no-await-in-loop */
}

main();
