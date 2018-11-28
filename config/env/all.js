'use strict';

var path = require('path'),
rootPath = path.normalize(__dirname + '/../..');

module.exports = {
	root: rootPath,
    db: process.env.MONGOHQ_URL,
    // should be non-guessable - this is pretty guessable... so?! might want to change that later when I know more...
    sessionSecret: 'cabinquest',
 	// The name of the MongoDB collection to store sessions in
 	sessionCollection: 'sessions',
 	pitch: 'is a game about the overlap of city and country. It also allows you to organize your RSS feeds into collections which can be accessed from and contribute to the game.',
 	title: 'cabinquest'
}
