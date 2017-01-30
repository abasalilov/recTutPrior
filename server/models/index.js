"use strict";
var db = require('../db');

// connection.query("SELECT * FROM REG_NODEJS WHERE username='"+body.username+"'", function(err, res, fields){
//         if(err) {
//           response.sendFile( "/js/nodejs/folder1/unauthorised.html");
//         } else {
//           bcrypt.compare(body.pwd, res[0].password, function(err, res) {
//             if(res) {
//               console.log("authorised user");
//               response.sendFile( "/js/nodejs/folder1/authorised.html");
//             } else {
//               console.log("not an authorised user");
//               response.sendFile( "/js/nodejs/folder1/unauthorised.html");
//             }
//           });
//         }

module.exports = {

  lessons: {
    get: function (callback) {
      console.log('callback', callback)
      var queryStr = 'select * from lessons';
      db.query(queryStr, function(err, results) {

        console.log('results in get', results)
        callback(err, results);
      });
    },
    post: function (params, callback) {
      console.log('inside the lessons get models', params)
      var queryStr = 'insert into lessons(Title, Summary, Content) value (?, ?, ?)';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
        console.error(err);
        console.log(results);
      });
    }
  },
  answers: {
    get: function (callback) {
      var queryStr = 'select * from answers';
      db.query(queryStr, function(err, results) {
        callback(err, results);
        console.error(err);
        console.log(results);
      });
    },

    post: function (params, callback) {
      // create a message for a user id based on the given username
      var queryStr = 'insert into answers(answerText, questionID, user) value (?, ?, ?)';
      db.query(queryStr, params, function(err, results) {
        if(err){ console.error(err)}
        callback(err, results);
      });
    }
  },
  users: {
    get: function (params, callback) {
      console.log('callback inside models', callback);
      var queryStr = 'SELECT Username FROM User WHERE User.Username = '+params.body+'';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
        console.log('results in line', results);
      });
    },
    post: function (params, callback) {
      console.log('models users 50, params', params)
      var queryStr = 'insert into User(Username, password) values (?, ?)';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  },

  questions: {
    get: function (callback) {
      var queryStr = 'select * from questions';
      db.query(queryStr, function(err, results) {
        callback(err, results);
      });
    },
    post: function (params, callback) {
      console.log('models questions 69, params', params)
      var queryStr = 'insert into questions(QuestionText1, QuestionText2, QuestionText3, lessonID) values (?, ?, ?, ?)';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });
    }
  }
};
