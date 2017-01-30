import { FETCH_LESSONS, FETCH_QUIZ, LESSON_SELECTED } from './types';

export function fetchLessons() {
    let theHeaders = new Headers({ "Content-Type": "application/json" });
    const request = fetch('/lessons', { method: 'GET', headers: theHeaders})

  return {
    type: FETCH_LESSONS,
    payload: request
  };
}

export function fetchQuiz() {
    let theHeaders = new Headers({ "Content-Type": "application/json" });
    const request = fetch('/questions', { method: 'GET', headers: theHeaders})

  return {
    type: FETCH_QUIZ,
    payload: request
  };
}

export function selectLesson (lesson) {
  return {
    type: LESSON_SELECTED,
    payload: lesson
  }
};
