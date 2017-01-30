import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router';
import QuizForm from './QuizForm';


class Quiz extends React.Component {
  constructor(props){
    super(props)
    this.state = {quizStarted: null,
    quizQ: null}
  }

  componentWillMount(){
    this.props.fetchQuiz()
  }

  componentDidMount() {
  }

  renderQuiz(questions){
    return (
    <div>
    <QuizForm questions={questions}/>
    </div>
    )
  }


  retrieveQuizData() {
    this.setState({quizStarted: true})
    let num = this.props.quizNum
    let list = this.props.quiz.slice(0,8);
    let q = null;
    for (var i = 0; i < list.length; i++) {
      if (num === list[i].lessonID){
          q = list[i];
          this.setState({quizQ:q});
          console.log('Q',q)
      }
    }
    return < QuizForm props={this.state.quizQ} />;
  }

  render() {

    return (
      <div>
        <a className="btn btn-primary" onClick = {() => this.retrieveQuizData()} >Quizzzzzz button</a>
          {(this.state.quizStarted === true) ? <h4>{this.renderQuiz(this.state.quizQ)}</h4> : null}
        <br/> <br/> <br/>
      </div>

      )
  }
}


function mapStateToProps(state) {
  return { quiz: state.quiz };
}

export default connect(mapStateToProps, actions)(Quiz);
