import { combineReducers } from 'redux';
import lessonReducer from './reducer_lessons.js';
import quizReducer from './reducer_quiz';
import selectLesson from './reducer_selectLesson';

const rootReducer = combineReducers({
  lessons: lessonReducer,
  selectLesson: selectLesson,
  quiz: quizReducer
});

export default rootReducer;
