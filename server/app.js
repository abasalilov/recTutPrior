"use strict";
//mysql -u root < server/schema.sql load sql into instance
var express = require('express');
var db = require('./db');

// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./routes.js');

var app = express();

app.set('port', 8080);

app.use(morgan('dev'));
app.use(parser.json());

app.use('/', router);

app.use(express.static(__dirname + '/../client'));

app.listen(app.get('port'));
console.log('Listening on', app.get('port'));

module.exports.app = app;



// try to find your log file with suffix ".err", there should be more info. It might be in:

// /usr/local/var/mysql/your_computer_name.local.err
// It's probably problem with permissions

// check if any mysql instance is running

// ps -ef | grep mysql
// if yes, you should stop it, or kill the process

// kill -9 PID
// where PID is the number displayed next to username on output of previous command
// check ownership of /usr/local/var/mysql/

// ls -laF /usr/local/var/mysql/
// if it is owner by root you should change it mysql or your_user
// sudo chown -R mysql /usr/local/var/mysql/
