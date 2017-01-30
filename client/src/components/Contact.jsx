import React from 'react';
import {Link} from 'react-router';
import NavBar from './navbar.jsx';
import QuizForm from './QuizForm';
// style={{backgroundColor: '#5163EF', width: 'auto', paddingTop: "2em", paddingLeft: "2em", color: 'white', fontFamily: 'Open Sans'}}
const q = {questionID: 1, QuestionText1: "email address", QuestionText2: "question", QuestionText3: "name", lessonID: "How can I help you?"};

export default class Contact extends React.Component {
  constructor() {
    super();
    this.state = {value: '',
    answer1: null,
    answer2: null,
    answer3: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange1(event) {
    this.setState({answer1: event.target.value});
  }

  handleChange2(event) {
    console.log('event', event.target.value)
    this.setState({answer2: event.target.value});
  }

  handleChange3(event) {
    this.setState({answer3: event.target.value});
  }

  handleSubmit(event) {
    // let fullAnswer = this.state.answer1.concat(this.state.answer2).concat(this.state.answer3);
    // event.preventDefault();
    // let theHeaders = new Headers({ "Content-Type": "application/json" });
    // let postObj = {answerText:fullAnswer,
    //   questionID: this.props.questions.lessonID, user: 'aleks'};
    // fetch('/answers', { method: 'POST', body: JSON.stringify(postObj), headers: theHeaders})
    // .then(function(response){
    //   console.log('response', response)
    // })
  }

  render() {

    return (
      <div >
      <NavBar />
      <br/>
      <div>
      <div>
      <div style={{backgroundColor: '#5163EF', color: 'white', fontFamily: 'Open Sans', paddingLeft:"2em", paddingTop: "2em"}}>
        <span><h1>Recruiter Tutor</h1></span>
      </div>
      </div>
      <br/>
      <div style={{paddingLeft:"2em"}}>
        <div >
          <form onSubmit={this.handleSubmit}>
            <h4>Name </h4>
            <textarea style={{width: "100px"}} type="text" value={this.state.answer1} onChange={this.handleChange1.bind(this)}>
            </textarea>
            <h4>Email </h4>
            <textarea  style={{width: "100px"}} type="text" value={this.state.answer2} onChange={this.handleChange2.bind(this)} >
            </textarea>
            <h4>What can I help you with?</h4>
            <textarea type="text" value={this.state.answer3} onChange={this.handleChange3.bind(this)} >
            </textarea>
            <br/>
            <input type="submit" value="Submit Contact Request" />
          </form>
        </div>
      </div>
      <br/>
      <br/>
      </div>
      </div>
      )
  }
}


// <Link to="/demo"><button>Try a demo lesson</button></Link>
// </div>
// <div className="app-info">
// <h1>Learn how to build teams and find talent</h1>
// <div className="app-info-box">
// <div className="screenshot1">
// </div>
// <div className="app-info-text">
// Those starting out: Start your recruiting career
// </div>
// </div>
// <div className="app-info-box">
// <div className="screenshot2">
// </div>
// <div className="app-info-text">
// Those founding a start-up: Build the team you need for your start-up
// </div>
// </div>
// <div className="app-info-box">
// </div>
// <div className="app-info-text" style={{textAlign: 'center'}}>
// Those in the field: Refresh your fundementals
// </div>
