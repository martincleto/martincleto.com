/*
 * config.js
 * Env configs, e.g. database name (dev/prod)
 * 
 */

var path = require('path')
  , rootPath = path.normalize(__dirname + '/..');

module.exports = {
  development: {
  	db: 'mongodb://localhost/martincleto',
  	root: rootPath,
  	user: 'test',
  	password: 'test'
  },
  production: {}
}