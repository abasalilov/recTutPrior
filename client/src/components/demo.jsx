// Title: 'lesson 1', Summary: 'How to be good at anything - The man in the mirror!', Content: 'Knowing Yourself  -  A key component to success is to know build on what you can do well and continuously work on what you cannot do well. Since you are beginning I would suggest taking the time to write down a list of things you have been recognized for by managers, colleagues, friends, relatives and customers in the past. After the list of strengths make a list of weaknesses you have, this might be more difficult, but everyone has them. The best way to see progress is to continuously to ask for feedback. Also, be sincerely be open to feedback and follow through with suggestions. Best feedback to get is one-on-one if possible. Obviously this is not a short term goal so keep at it!'

//style={{backgroundColor: '#5163EF', color: 'white', fontFamily: 'Open Sans', paddingLeft:"2em", paddingTop: "2em"}}>
//
import React, { Component } from 'react';
import NavBar from './navbar.jsx';

export default class Demo extends React.Component {

  render() {

    return (
      <div >
      <NavBar/>
      <div >
      <div style={{backgroundColor: '#5163EF', color: 'white', fontFamily: 'Open Sans', paddingLeft:"2em", paddingTop: "1em", paddingBottom: '1em'}}>
          <h4> Lesson 1 ~ Knowing Yourself</h4>
          </div>
          <br/>
          <div>
          <h6>Summary: How to be good at anything - It's all about the man/woman in the mirror!</h6>
          </div>
          <br/>
        <div/>
        <div>
        <div>          
        <h6>Quote
        This above all: to thine own self be true,\n
        And it must follow, as the night the day,
        Thou canst not then be false to any man.
        Farewell, my blessing season this in thee!<br/><p> ~ William Shakespeare, Hamlet, Act 1, Scene III </p></h6></div>
        <div>
        <div style={{backgroundColor: '#5163EF', color: 'white', fontFamily: 'Open Sans', paddingLeft:"2em", paddingTop: "1em", paddingBottom: '1em'}}>
        <h6>Lesson: </h6>
        <p>A key component to success is to know build on what you can do well and continuously work on what you cannot do well. Since you are beginning I would suggest taking the time to write down a list of things you have been recognized for by managers, colleagues, friends, relatives and customers in the past. After the list of strengths make a list of weaknesses you have, this might be more difficult, but everyone has them. The best way to see progress is to continuously to ask for feedback. Also, be sincerely be open to feedback and follow through with suggestions. Best feedback to get is one-on-one if possible. Obviously this is not a short term goal so keep at it!</p>
        </div>
        </div>
        </div>
        </div>
      </div>

      )
  }
}
