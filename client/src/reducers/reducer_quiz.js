import { FETCH_QUIZ } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_QUIZ:
      return [ ...state, ...action.payload ];
  }

  return state;
}
