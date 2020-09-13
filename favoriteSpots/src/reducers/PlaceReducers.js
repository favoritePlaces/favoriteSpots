import {
  GET_PERSONAL_PLACE_START,
  GET_PERSONAL_PLACE_SUCCESS,
  GET_PERSONAL_PLACE_FAILED,
  ADD_PERSONAL_PLACE_START,
  ADD_PERSONAL_PLACE_SUCCESS,
  ADD_PERSONAL_PLACE_FAILED,
} from '../actions/types';

const INITIAL_STATE = {
  loadingList: false,
  myPlaces: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_PERSONAL_PLACE_START:
      return {
        ...state,
        loadingList: true,
      };

    case ADD_PERSONAL_PLACE_SUCCESS:
      return {
        ...state,
        myPlaces: [...state.myPlaces, action.payload],
        loadingList: false,
      };
    case ADD_PERSONAL_PLACE_FAILED:
      return {
        ...state,
        loadingList: false,
      };
    case GET_PERSONAL_PLACE_START:
      return {
        ...state,
        loadingList: true,
      };

    case GET_PERSONAL_PLACE_SUCCESS:
      return {
        ...state,
        loadingList: false,
        myPlaces: action.payload,
      };

    case GET_PERSONAL_PLACE_FAILED:
      return {
        ...state,
        loadingList: false,
      };
    default:
      return state;
  }
};
