import {
    LIST_START,
    LIST_SUCCESS,
    LIST_FAILED,

} from '../actions/types';

const INITIAL_STATE = {
    loadingList: false,
    places: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case LIST_START:
            return {
                ...state,
                loadingList: true,
            };

        case LIST_SUCCESS:
            return {
                ...state,
                loadingList: false,
                    places: action.payload.places
            };

        case LIST_FAILED:
            return {
                ...state,
                loadingList: false,
            };
            default:
                return state;
    }
}