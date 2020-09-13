import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SIGN_OUT_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  user: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        loading: false,
      };

    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        user: null,
        friendGroups: [],
        users: [],
        myPlaces: [],
      };
    default:
      return state;
  }
};
