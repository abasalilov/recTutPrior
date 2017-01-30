import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

export default class QuizForm extends React.Component {
  constructor(props) {
    super(props);
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
    let fullAnswer = this.state.answer1.concat(this.state.answer2).concat(this.state.answer3);
    event.preventDefault();
    let theHeaders = new Headers({ "Content-Type": "application/json" });
    let postObj = {answerText:fullAnswer,
      questionID: this.props.questions.lessonID, user: 'aleks'};
    fetch('/answers', { method: 'POST', body: JSON.stringify(postObj), headers: theHeaders})
    .then(function(response){
      console.log('response', response)
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>QUESTION 1: {this.props.questions.QuestionText1}</h4>
        <textarea type="text" value={this.state.answer1} onChange={this.handleChange1.bind(this)}>
        </textarea>
        <h4>QUESTION 2: {this.props.questions.QuestionText2}</h4>
        <textarea type="text" value={this.state.answer2} onChange={this.handleChange2.bind(this)} >
        </textarea>
        <h4>QUESTION 3: {this.props.questions.QuestionText3}</h4>
        <textarea type="text" value={this.state.answer3} onChange={this.handleChange3.bind(this)} >
        </textarea>
        <br/>
        <input type="submit" value="Submit Answers" />
      </form>
    );
  }
}
