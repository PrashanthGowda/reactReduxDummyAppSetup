import * as actionType from '../common/actionTypes';
import axios from 'axios';

export function createCourse(courses) {
  return { type: actionType.CREATE_COURSE, courses };
}

export function loadCourses() {
  return function(dispatch) {
    // dispatch(loadCoursesStarted());
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        dispatch(loadCoursesSuccess(res.data));
      })
      .catch(err => {
        dispatch(loadCoursesFailure(err.message));
      });
  };
}

// export function loadCourseStarted() {}
export function loadCoursesSuccess(courses) {
  return { type: actionType.LOAD_COURSE_SUCCESS, courses };
}
export function loadCoursesFailure(message) {
  return { type: actionType.LOAD_COURSE_FAILURE, message };
}
