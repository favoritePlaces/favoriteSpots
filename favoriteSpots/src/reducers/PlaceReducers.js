import {
  GET_PLACE_START,
  GET_PLACE_SUCCESS,
  GET_PLACE_FAILED,
  ADD_PLACE_START,
  ADD_PLACE_SUCCESS,
  ADD_PLACE_FAILED,
} from '../actions/types';

const INITIAL_STATE = {
  loadingList: false,
  places: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PLACE_START:
      return {
        ...state,
        loadingList: true,
      };

    case ADD_PLACE_SUCCESS:
      return {
        ...state,
        places: [...state.places, action.payload],
        loadingList: false,
      };
    case ADD_PLACE_FAILED:
      return {
        ...state,
        loadingList: false,
      };
    case GET_PLACE_START:
      return {
        ...state,
        loadingList: true,
      };

    case GET_PLACE_SUCCESS:
      return {
        ...state,
        loadingList: false,
        places: action.payload,
      };

    case GET_PLACE_FAILED:
      return {
        ...state,
        loadingList: false,
      };
    default:
      return state;
  }
};
