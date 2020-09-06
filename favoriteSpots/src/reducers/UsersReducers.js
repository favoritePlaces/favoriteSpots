import {

    USERS_LOADED,
    USERS_FAILED,
    ADD_USER_SUCCESS,
    ADD_USER_FAILED,
    REMOVE_USER_START,
    REMOVE_USER_SUCCESS,
    REMOVE_USER_FAILED

} from '../actions/types';

const INITIAL_STATE = {

    users: [],
    loadingRemoveUser : false
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case USERS_LOADED:
        
            return {
                ...state,
                users = action.payload.users //send the object accordingly
            };


        case USERS_FAILED: //there can be back up to handle this situation on actions
            return {
                ...state,
            };


        case ADD_USER_SUCCESS: //when registration happens
            return {
                ...state,
            };


        case ADD_USER_FAILED:
            return {
                ...state,
            };


        case REMOVE_USER_START:
            return {
                ...state,
                loadingRemoveUser: true, //deleting account
            };


        case REMOVE_USER_SUCCESS:
            const id = action.payload
            const newData = state.users.filter((dt) => dt.id != id) //should be revised
            return {
                ...state,
                loadingRemoveUser: false,
                users: newData
            };

        case REMOVE_USER_FAILED:
            return {
                ...state,
                loadingRemoveUser: false,
            };

        default:
            return state;
    }
};