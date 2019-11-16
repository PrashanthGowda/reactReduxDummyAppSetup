import * as actionType from '../common/actionTypes';
import initialState from '../common/initialState';

export default function authorReducer(state = initialState.authors, action) {
  switch (action.type) {
    case actionType.LOAD_AUTHOR_SUCCESS:
      return action.authors;
    default:
      return state;
  }
}
