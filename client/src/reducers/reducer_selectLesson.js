export default function selectLesson(state = null, action) {
  switch(action.type) {
    case 'LESSON_SELECTED' :
     return action.payload;
  }
  return state;
}
