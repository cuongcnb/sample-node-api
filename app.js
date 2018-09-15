'use strict';
const env = process.env.NODE_ENV || 'production';
const config = require('config');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// connect to mongo database
mongoose.connect(config.get('database.url'));

require('./routers')(app);

const server = require('http').createServer(app);
server.listen(config.get('port'));
console.log('Started server in port ' + config.get('port'));