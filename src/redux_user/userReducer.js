// userReducer.js
import * as types from './typeActionUser';

const initialState = {
  users: [],
  loading: false,
  error: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_USER_REQUEST:
      return { ...state, loading: true, error: '' };

    case types.ADD_USER_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.payload],
        loading: false,
        error: '',
      };

    case types.ADD_USER_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default userReducer;
