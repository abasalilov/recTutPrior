"use strict";
var models = require('../models');
var passport = require('passport');

module.exports = {

  lessons: {
    get: function (req, res) {
    console.log('inside lessons in controller')
      models.lessons.get(function(err, results) {
        console.log('req lessons get2', results)
        if (err) { console.error(err) }
        res.json(results);
      });
    },
    post: function (req, res) {
      var params = [req.body.Title, req.body.Summary, req.body.Content];
      models.lessons.post(params, function(err, results) {
        console.log('results', results)
        if (err) { console.error(err) }
        res.sendStatus(201);
      });
    }
  },

  users: {
    get: function (req, res) {
      console.log('req users get controller 26')
      models.users.get(function(err, results) {
        if (err) { console.error(err) }
        res.json(results);
      });
    },
    post: function (req, res) {
      console.log('req users post controller 33', req.body)
      var params = [req.body.Username, req.body.password];
      models.users.post(params, function(err, results) {
        if (err) { console.error(err) }
        res.sendStatus(201);
      });
    }
  },

  answers: {
    get: function (req, res) {
      models.answers.get(function(err, results) {
        if (err) { console.error(err) }
        res.json(results);
      });
    },

    post: function (req, res) {
      console.log('controller params line 48', req.body)
      var params = [req.body.answerText, req.body.questionID, req.body.user];
      console.log('params in controller index 53', params)
      models.answers.post(params, function(err, results) {
        console.log('results in line 57 answers controller post', results)
        if (err) { console.error(err) }
        res.sendStatus(201);
      });
    }
  },

  question: {
    get: function (req, res) {
      models.questions.get(function(err, results) {
        if (err) { console.error(err) }
        res.json(results);
      });
    },
    post: function (req, res) {
      console.log('controller params line 72', req.body)
      var params = [req.body.QuestionText1, req.body.QuestionText2, req.body.QuestionText3, req.body.lessonID];
      models.questions.post(params, function(err, results) {
        console.log('results in line 75 answers controller post 53', results)
        if (err) { console.error(err) }
        res.sendStatus(201);
      });
    }
  },


  login: {
    get: function (req, res) {
      var params = [req.body.Username, req.body.password];
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~req', req);
      console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~res', res)
      models.users.get(params, function(err, results) {
        if (err) { console.error(err) }
        res.json(results);
      console.log('login res at line 88', results)
      });
    },
    post: function (req, res) {
      console.log('controller params line 92', req.body)
      var params = [req.body.Username, req.body.password];
      models.users.post(params, function(err, results) {
        console.log('results in line 95 login controller post', results)
        if (err) { console.error(err) }
        res.sendStatus(201);
      });
    }
  },

    signup: {
    get: function (req, res) {
      models.user.get(function(err, results) {
        if (err) { console.error(err) }
        res.json(results);
      });
    },
    post: function (req, res) {
      console.log('controller params line 48', req.body)
      var params = [req.body.Usernamem, req.body.password];
      models.questions.post(params, function(err, results) {
        console.log('results in line 72 answers controller post 53', results)
        if (err) { console.error(err) }
        res.sendStatus(201);
      });
    }
  },

   logout: {
    get: function (req, res) {
      models.user.get(function(err, results) {
        if (err) { console.error(err) }
        res.json(results);
      });
    },
    post: function (req, res) {
      console.log('controller params line 48', req.body)
      var params = [req.body.Usernamem, req.body.password];
      models.questions.post(params, function(err, results) {
        console.log('results in line 72 answers controller post 53', results)
        if (err) { console.error(err) }
        res.sendStatus(201);
      });
    }
  }
};
