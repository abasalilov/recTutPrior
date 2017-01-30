var controller = require('./controllers/index.js');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/lessons', controller.lessons.get);

router.post('/lessons', controller.lessons.post);

router.post('/lessons/users', controller.lessons.post);

router.post('/lessons/answers', controller.answers.post);

router.get('/lessons/answers', controller.answers.get);

router.get('/users', controller.users.get);

router.post('/users', controller.users.post);

router.get('/answers', controller.answers.get);

router.post('/answers', controller.answers.post);

router.get('/questions', controller.question.get);

router.post('/questions', controller.question.post);

router.post('/auth/login', controller.login.get);

router.post('/auth/signup', controller.signup.post);

router.post('/logout', controller.logout.post);

module.exports = router;
