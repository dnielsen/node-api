var knex = require('knex'),
    config = require('./config_data.json');

var knexInstance = knex.initialize( config.db_config );

exports.knex = knexInstance;

var baseHost = 'localhost';
exports.baseHost = baseHost;

var basePort = 3000;
exports.basePort = basePort;

var baseProtocol = 'http';
exports.baseProtocol = baseProtocol;

var baseUrl = baseProtocol + '://' + baseHost + ':' + basePort;
exports.baseUrl = baseUrl;

