import {
    GROUP_GET_SUCCESS,
    GROUP_GET_FAILED,
    GROUP_ADD_SUCCESS,
    GROUP_ADD_FAILED,

} from '../actions/types';

const INITIAL_STATE = {

    friendGroups: [],
    loadingFriendGroups : false
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GROUP_GET_SUCCESS:
        
            return {
                ...state,
                friendGroups : [... action.payload] 
            };
            case GROUP_GET_FAILED:
        
                return {
                    ...state,
                };

        case GROUP_ADD_SUCCESS:
        const newGroup = action.payload; //send the object accordingly
        console.log('Reducer newGroup',newGroup)
            return {
                ...state,
                friendGroups : [...state.friendGroups, newGroup]  //will be in the front end just for the person who is in session
            };


        case GROUP_ADD_FAILED: //there can be back up to handle this situation on actions
            return {
                ...state,
            };

        default:
            return state;
    }
};