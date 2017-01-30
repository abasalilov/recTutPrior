var mysql = require('mysql');
var request = require('request'); 
var expect = require('chai').expect;
var http = require('http');

describe('Server', function() {
  var dbConnection;

  beforeEach(function(done) {
    dbConnection = mysql.createConnection({
      user: 'root',
      password: '',
      database: 'recruiterTutor'
    });
    dbConnection.connect();

    var tablename = 'lessons'; 

    dbConnection.query('truncate ' + tablename, done);
  });

  afterEach(function() {
    dbConnection.end();
  });

  it('Should insert posted Lessons to the DB', function(done) {

    request({
      method: 'POST',
      uri: 'http://127.0.0.1:3000/lessons',
      json: { 
        Title: 'abc',
        Summary: 'abc', 
        Content: 'abc'
      }
    }, function () {

      request({

        method: 'POST',
        uri: 'http://127.0.0.1:3000/lessons',
        json: {
          Title: 'abc',
          Summary: 'abc', 
          Content: 'abc'
        }
      }, function () {

        var queryString = 'SELECT * FROM lessons';
        var queryArgs = [];

        dbConnection.query(queryString, queryArgs, function(err, results) {
          expect(results.length).to.equal(2);
          expect(results[0].Title).to.equal('abc');

          done();
        });
      });
    });
  });

  it('Should output all lessons from the DB', function(done) {

    queryString = 'INSERT INTO lessons (Title, Summary, Content) VALUES (?, ?, ?)';

    var queryArgs = ['a', 'b', 'c'];

    dbConnection.query(queryString, queryArgs, function(err) {
      if (err) { throw err; }

      request('http://127.0.0.1:3000/lessons', function(error, response, body) {
        var answerLog = JSON.parse(body);
        expect(answerLog[0].Title).to.equal('a');
        expect(answerLog[0].Summary).to.equal('b');
        done();
      });
    });
  });

  it('Should insert posted users to the DB', function(done) {

    request({
      method: 'POST',
      uri: 'http://127.0.0.1:3000/users',
      json: { 
        Username: 'abc',
        password: 'abc', 
      }
    }, function () {

      request({

        method: 'POST',
        uri: 'http://127.0.0.1:3000/users',
        json: {
          Username: 'abc',
          password: 'abc', 
        }
      }, function () {

        var queryString = 'SELECT * FROM User';
        var queryArgs = [];

        dbConnection.query(queryString, queryArgs, function(err, results) {
          done();
        });
      });
    });
  });

  it('Should output all lessons from the DB', function(done) {

    queryString = 'INSERT INTO User (Username, password) VALUES (?, ?)';

    var queryArgs = ['a', 'b'];

    dbConnection.query(queryString, queryArgs, function(err) {
      if (err) { throw err; }

      request('http://127.0.0.1:3000/users', function(error, response, body) {
        var answerLog = JSON.parse(body);
        expect(answerLog[0].Username).to.equal('a');
        expect(answerLog[0].password).to.equal('b');
        done();
      });
    });
  });

  it('Should insert answers users to the DB', function(done) {

    request({
      method: 'POST',
      uri: 'http://127.0.0.1:3000/answers',
      json: { 
        answerText: 'abc',
        questionID: 'abc', 
        user: 'user'
      }
    }, function () {

      request({

        method: 'POST',
        uri: 'http://127.0.0.1:3000/answers',
        json: {
        answerText: 'abc',
        questionID: 'abc', 
        user: 'woot' 
        }
      }, function () {

        var queryString = 'SELECT * FROM answers';
        var queryArgs = [];

        dbConnection.query(queryString, queryArgs, function(err, results) {

          done();
        });
      });
    });
  });

  it('Should output all answers from the DB', function(done) {

    queryString = 'INSERT INTO answers (answerText, questionID, user) VALUES (?, ?, ?)';

    var queryArgs = ['a', 'b', 'c'];

    dbConnection.query(queryString, queryArgs, function(err) {
      if (err) { throw err; }

      request('http://127.0.0.1:3000/answers', function(error, response, body) {
        var answerLog = JSON.parse(body);
        expect(answerLog[answerLog.length -1].answerText).to.equal('a');
        expect(answerLog[answerLog.length -1].questionID).to.equal('b');
        expect(answerLog[answerLog.length -1].user).to.equal('c');
        done();
      });
    });
  });
});