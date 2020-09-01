import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  SIGN_OUT_SUCCESS,
} from './types';

import {Alert} from 'react-native';
import * as RootNavigation from '../RootNavigation';

export const login = (params) => {
  return (dispatch) => {
    if (params.email != '' && params.password != '') {
      if (validateEmail(params.email)) {
        dispatch({type: LOGIN_SUCCESS});
       // RootNavigation.replace('Home');
      } else {
        Alert.alert('UYARI', 'Lütfen geçerli bir email yazınız!');
      }
    } else {
      Alert.alert('UYARI', 'Lütfen bütün alanları doldurunuz!');
    }
  };
};

export const signOut = () => {
  return (dispatch) => {
    dispatch({type: SIGN_OUT_SUCCESS});
  //  RootNavigation.replace('Entrance');
  };
};

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
