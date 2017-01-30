import { FETCH_LESSONS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_LESSONS:
      return [ ...state, ...action.payload ];
  }

  return state;
}
