// userActions.js
import axios from 'axios';
import * as types from './typeActionUser';

export function postUser(user) {
  return function (dispatch) {
    dispatch({ type: types.ADD_USER_REQUEST });

    axios.post('http://localhost:3500/users', user)
      .then(response => {
        dispatch({
          type: types.ADD_USER_SUCCESS,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: types.ADD_USER_FAILURE,
          payload: error.message
        });
      });
  };
}


