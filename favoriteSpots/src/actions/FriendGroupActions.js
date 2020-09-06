import {
   GROUP_ADD_SUCCESS,
    GROUP_ADD_FAILED,
    GROUP_GET_SUCCESS,
    GROUP_GET_FAILED

  } from './types';
  import firestore from '@react-native-firebase/firestore';
  
  export const createFriendGroup = (params) => {
  console.log('params',params)
    return (dispatch) => {
      firestore()
        .collection('FriendGroups')
        .add(params)
        .then(() => {
            console.log('friend group is added')
           dispatch({
            type:GROUP_ADD_SUCCESS,
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
  