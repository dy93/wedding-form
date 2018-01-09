# 地表最(ㄗˋ)有(ㄐㄧˇ)誠(ㄒㄧㄝˇ)意(ㄉㄜ˙)婚禮調查表
## Preview
![screen shot](screenshot.PNG)

## [Example website](https://dy93.github.io/wedding-form/)

## TL;DR
0. Prerequisite
	1. node(8.x)
	2. yarn(latest)
1. Prepare
	1. (Optional) Prepare google analytics id
	2. Run `mv client/src/config.example.js client/src/config.js`
		and modify _client/src/config.js_
	3. Run `mv client/.example.env client/.env`
		and modify _client/.env_ (optional replace the `REACT_APP_GA_ID`)
	4. Replace _client/public/bg.jpg_
2. Build client js:
	`cd client && yarn install && npm run build`
3. Run server:
	`cd server && yarn install && npm run start`

Now you can visit your server at http://localhost:5000

## Query zip code
Run `node server/bin/queryZipCode.js`

This script will iterate each user's address and get taiwan zip code(3+2) from [http://zip5.5432.tw/](http://zip5.5432.tw/), delay 1.5 seconds each.

## Where is my data?
The data is store at server/db.sqlite, a sqlite database.
You can use your favorite sqlite client to export data, eg: `sqlite3 -column -csv -header server/db.sqlite 'select * from form'`

## How to develop
### Client side
1. Run webpack-dev-server: `cd client && npm run start`
2. Run server: `cd server && npm run start`
3. Browse http://localhost:3000
4. Edit code and enjoy auto-reload!

### Server side
1. Edit code and run server: `cd server && npm run start`
