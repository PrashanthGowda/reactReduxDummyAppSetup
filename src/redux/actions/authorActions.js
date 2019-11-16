import * as actionType from '../common/actionTypes';
import axios from 'axios';

export function loadAuthors() {
  return function(dispatch) {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        dispatch(loadAuthorSuccess(res.data));
      })
      .catch(err => {
        dispatch(loadAuthorFailure(err.message));
      });
  };
}

export function loadAuthorSuccess(authors) {
  return {
    type: actionType.LOAD_AUTHOR_SUCCESS,
    authors
  };
}
export function loadAuthorFailure(message) {
  return {
    type: actionType.LOAD_AUTHOR_FAILURE,
    message
  };
}
