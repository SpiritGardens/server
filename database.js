const Realm = require('realm');
const dbID = require('./localvariables');

const database = new Realm.App(dbID);

module.exports = database;