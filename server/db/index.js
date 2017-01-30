"use strict";
var mysql = require('mysql');
//mysql://beb15e3584f68b:db775cb8@us-cdbr-iron-east-04.cleardb.net/heroku_f4690368ce3cf33?reconnect=true
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'app',
  database: 'recruiterTutor'
});

connection.connect(function(error){
    if(error){
        console.error(error);
    }else{
        console.log('Connected');
    }
});
module.exports = connection;

///asdfadsfasdfasdfasdfadf
///asdf/sdf
