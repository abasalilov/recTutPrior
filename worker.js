"use strict";
var controller = require('./server/controllers/index.js');
var request = require('request');
var http = require('http');

let lessons = [
{Title: 'lesson 1', Summary: 'How to be good at anything - The man in the mirror!', Content: 'Knowing Yourself  -  A key component to success is to know build on what you can do well and continuously work on what you cannot do well. Since you are beginning I would suggest taking the time to write down a list of things you have been recognized for by managers, colleagues, friends, relatives and customers in the past. After the list of strengths make a list of weaknesses you have, this might be more difficult, but everyone has them. The best way to see progress is to continuously to ask for feedback. Also, be sincerely be open to feedback and follow through with suggestions. Best feedback to get is one-on-one if possible. Obviously this is not a short term goal so keep at it!'},
{Title: 'lesson 2', Summary: 'Simple Truths', Content: 'People do business with people the like - Respect is everything, show respect to every candidate you talk to, this the first step to getting them to like you. - There are a lot of recruiters calling these people, differentiate yourself by being interested in them, their skills, their past & future…not trying to impress them.  - People love to talk about themselves, so being sincerely interested in them will naturally make it easier for them to like you and work with you.'},
{Title: 'lesson 3', Summary: 'Critical Tasks', Content: 'Excelling at Critical Tasks - There are very many tasks in the day to day of recruiting. Here are just a few:  • Listen – interviewing, qualifying, etc. • Develop and manage relationships  • Managing your bandwidth and activity – Recruitment studio, organization, etc.  • Getting candidate commitment (more on this later). Like anything  effort, discipline and getting feedback will be key.'},
{Title: 'lesson 4', Summary: 'Asking the right questions', Content: 'Asking the right questions - Every conversation is like a navigating a trip... there are a million ways to get from A to B, your job is to focus on making the right turns to get there and get the most information possible. - Each person you talk to will lie at least once while on the phone with you...ask questions to dig deeper and validate the information. You made how much? So how much did you make before that? Before that? Before that? - Reflect their tone, style of talk and repeat their words back to them and use that to segue to the next questions. - What do YOU need to know to make a decision on whether or not this candidate is qualified? Ask those questions.'},
{Title: 'lesson 5', Summary: 'Attitude - Getting out of your own way', Content: 'Attitude -  Staffing is one of the most difficult sale professions out there, because we are selling/presenting candidates’ expertise to managers, the benefits of a particular position to candidates, and continuously qualifying them. - This is essentially more complex because people are fickle and are on both sides of the equation….meaning we are aiming for moving targets (candidates) and basing our search off of moving targets (job orders that change and manager’s preferences) - With this in mind it is important to note that the better you stick to the fundamentals, the better your conversations get'},
{Title: 'lesson 6', Summary: 'AIDA & LOCKDOWN', Content: 'A – ATTENTION I – INTEREST D – DECISION A – ACTION A – Goal: Focusing on the target audience. Seeking people who will respond to what you are sharing. Generating interest. Questions: Do you have their attention? Is this a relevant opportunity? Similar to what they’ve done? How can you get their attention – On the phone? Email? In person? Do you have this info? I – Goal: It is all about them and getting them employed. Get them to answer the right questions. Questions: Is this good for them? Do they want it? Is this opportunity relevant to them? Same skill set? Do they have the education for it? Is this within their pay range? Commuting range? What are their goals? D – Goal: Spell out how this is good for them and get them to go with you. Have they committed to you? To the opportunity? To follow through? A – Goal: Setting expectation, follow through and commitment steps. LOCKDOWN: what commitment steps have you put forward? What will they do? How? What loop will you initiate/close? What is the time line expectation?'},
{Title: 'lesson 7', Summary: 'Basic Recruiting Script', Content: 'Write this section out'},
{Title: 'lesson 8', Summary: '360 Management', Content: 'Write this section out'}
];

let questions = [
{QuestionText1: 'Question1, lesson 1', QuestionText2: 'Question2, lesson', QuestionText3: 'Question3, lesson', lessonID: 1},
{QuestionText1: 'Question2, lesson 2', QuestionText2: 'Question2, lesson', QuestionText3: 'Question3, lesson', lessonID: 2},
{QuestionText1: 'Question3, lesson 3', QuestionText2: 'Question2, lesson', QuestionText3: 'Question3, lesson', lessonID: 3},
{QuestionText1: 'Question4, lesson 4', QuestionText2: 'Question2, lesson', QuestionText3: 'Question3, lesson', lessonID: 4},
{QuestionText1: 'Question5, lesson 5', QuestionText2: 'Question2, lesson', QuestionText3: 'Question3, lesson', lessonID: 5},
{QuestionText1: 'Question6, lesson 6', QuestionText2: 'Question2, lesson', QuestionText3: 'Question3, lesson', lessonID: 6},
{QuestionText1: 'Question7, lesson 7', QuestionText2: 'Question2, lesson', QuestionText3: 'Question3, lesson', lessonID: 7},
{QuestionText1: 'Question8, lesson 8', QuestionText2: 'Question2, lesson', QuestionText3: 'Question3, lesson', lessonID: 8}
];


for (var i = 0; i < lessons.length; i++) {
  request({
    method: 'POST',
    uri: 'http://127.0.0.1:8080/lessons',
    json: {
      Title: lessons[i].Title,
      Summary: lessons[i].Summary,
      Content: lessons[i].Content
    }, function(err, response, body) {
      if (err) {
        console.error(err);
      }
      if (response) {
        console.log('response', response);
      }
    }
  });
}

for (var i = 0; i < questions.length; i++) {
  request({
    method: 'POST',
    uri: 'http://127.0.0.1:8080/questions',
    json: {
      QuestionText1: questions[i].QuestionText1,
      QuestionText2: questions[i].QuestionText2,
      QuestionText3: questions[i].QuestionText3,
      lessonID: questions[i].lessonID
    }, function(err, response, body) {
      if (err) {
        console.error(err);
        console.log(err);
      }
      if (response) {
        console.log('response', response);
      }
    }
  });
}

console.log('run through seeding the db');
// content  = {

// intro:  " Welcom to Recruiting and Staffing Fundamentals by RecruiterTutor! This is intended to be a very basic, bird’s eye view of recruiting and staffing. All of the information here has been compiled throughout my experience, training, mentors, etc. A lot of these materials have been presented industry wide in the past and you may see them again. Regardless of what you take away from this please note that this is just the tip of the iceberg compared to what you will learn through actually doing the work and is not intended in any way, shape or form to be more than just a basic intro. That being said, remember that we wish you success in your endeavors and we are here to help!",

// contactMe: " Reach out with any questions or if you'd like more personalized training: Aleks Basalilov Co-Founder, RecruiterTutor  abasalilov@gmail.com",

// start: 'Please begin by selecting a lesson above that you would like to explore',
