import { combineReducers } from 'redux';
import PlaceReducers from './PlaceReducers';
import AuthReducers from './AuthReducers';
import UsersReducers from './UsersReducers';
import FriendGroupReducers from './FriendGroupReducers';
export default combineReducers({
    placeResponse: PlaceReducers,
    authResponse : AuthReducers,
    usersResponse : UsersReducers,
    friendGroupResponse : FriendGroupReducers,
});