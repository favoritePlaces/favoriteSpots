import { combineReducers } from 'redux';
import PlaceReducers from './PlaceReducers';
import AuthReducers from './AuthReducers';

export default combineReducers({
    placeResponse: PlaceReducers,
    authResponse : AuthReducers
});