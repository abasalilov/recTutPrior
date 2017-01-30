import React from 'react';
import { Component } from 'react';
import LessonList from './lesson_list';
import NavBar from './navbar.jsx';

export default class App extends Component {
  render() {
    return (
      <div style={{paddingTop: "2em"}}>
        <NavBar />
        <LessonList />
      </div>
    );
  }
}
