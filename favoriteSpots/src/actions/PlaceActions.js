import {
  LIST_START,
  LIST_SUCCESS,
  LIST_FAILED,
  ADD_PLACE_START,
  ADD_PLACE_SUCCESS,
  ADD_PLACE_FAILED,
} from './types';

import {Alert} from 'react-native';

export const getList = (params) => {
  return (dispatch) => {};
};

export const addPlace = (params) => {
  return (dispatch) => {
    dispatch({type: ADD_PLACE_START});
    firestore()
      .collection('Places')
      .add(params)
      .then((data) => {
        console.log('Add place', data);
        let placeId;

        if (params.image) {
          const reference = storage().ref(`/places/${placeId}`);

          reference
            .putFile(params.image)
            .then(() => {
              reference.getDownloadURL().then((imageURL) => {
                firestore()
                  .collection('Places')
                  .doc(placeId)
                  .update({place: {image: imageURL, text: params.place.text}})
                  .then(() => {
                    dispatch({type: ADD_PLACE_SUCCESS, payload: params});
                    RootNavigation.pop();
                  });
              });
            })
            .catch((error) => {
              console.log('Image loading error ', error);
            });
        } else {
          dispatch({type: ADD_PLACE_SUCCESS, payload: params});
          RootNavigation.pop();
        }
      })
      .catch(() => {
        dispatch({type: ADD_PLACE_FAILED});
        console.log('Place hasnt been add!');
      });
  };
};

export const removePlace = (params) => {
  return (dispatch) => {};
};
