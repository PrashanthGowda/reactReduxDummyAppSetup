import * as actionType from '../common/actionTypes';
import initialState from '../common/initialState';

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case actionType.CREATE_COURSE:
      return [...state, { ...action.course }];
    case actionType.LOAD_COURSE_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}
