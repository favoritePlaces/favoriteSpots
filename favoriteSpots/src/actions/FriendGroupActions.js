import {
  GROUP_ADD_SUCCESS,
  GROUP_ADD_FAILED,
  GROUP_GET_SUCCESS,
  GROUP_GET_FAILED,
} from './types';
import firestore from '@react-native-firebase/firestore';

export const createFriendGroup = (params) => {
  console.log('params', params);
  return (dispatch) => {
    firestore()
      .collection('FriendGroups')
      .add(params)
      .then(() => {
        console.log('friend group is added');
        dispatch({
          type: GROUP_ADD_SUCCESS,
          payload: params,
        });
      })
      .catch((err) => {
        console.log('friend group is not added: ', err);
        dispatch({
          type: GROUP_ADD_FAILED,
        });
      });
  };
};

export const getFriendGroups = (param) => {
  //ne zaman cagiracagiz
  console.log('getFriendGroups', param);
  return (dispatch) => {
    firestore()
      .collection('FriendGroups')
      .where('members', 'array-contains-any', [param.username])
      .get()
      .then((data) => {
        let ownGroups = [];
        data._docs.forEach((group) => {
          //firebase den member property sinde su username var mi diye
          ownGroups.push(group._data);
        });
        console.log(ownGroups);
        dispatch({
          type: GROUP_GET_SUCCESS,
          payload: ownGroups,
        });
      })
      .catch((err) => {
        console.log('Read Data error: ', err);
        dispatch({
          type: GROUP_GET_FAILED,
        });
      });
  };
};
