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
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const login = (params) => {
  return (dispatch) => {
    if (params.email != '' && params.password != '') {
      if (validateEmail(params.email)) {
        dispatch({type: LOGIN_START});
      console.log(params.email, params.password);
        auth()
        .signInWithEmailAndPassword(params.email, params.password)
        .then((data) => {
            console.log('signed in!', data);
            const uid = data.user._user.uid;
          
           dispatch({ type: LOGIN_SUCCESS, payload: params })
            // // read user from db
            // firestore()
            //     .collection('Users')
            //     .doc(uid)
            //     .get().then((user) => {
            //         console.log('Gelen Data: ', user._data);

            //         const userParams = {
            //             ...user._data,
            //             uid
            //         }
            //         dispatch({ type: LOGIN_SUCCESS, payload: userParams })


            //     }).catch((err) => {
            //         console.log('Read Data error: ', err);
            //         dispatch({ type: LOGIN_FAILD })
            //     })
        })
        .catch(error => {
            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');

            } else if (error.code === 'auth/user-not-found') {
                console.log('That email address is invalid!');
                Alert.alert('Uyarı', 'Böyle bir kullanıcı bulunamadı!')
            }
            console.log('error came')
            console.log(error.code);
            dispatch({ type: LOGIN_FAILED })
        })
      } else {
        Alert.alert('UYARI', 'Lütfen geçerli bir email yazınız!');
      }
    } else {
      Alert.alert('UYARI', 'Lütfen bütün alanları doldurunuz!');
    }
  };
};

export const register = (params) => {
  return (dispatch) => {
      if (params.email != '' && params.password != '' && params.firstname != '' && params.lastname != '') {
          if (validateEmail(params.email)) {
              auth()
                  .createUserWithEmailAndPassword(params.email, params.password)
                  .then((data) => {
                      const uid = data.user._user.uid;
                      // write user from db
                      const setData = {
                          name: params.name,
                          username: params.username,
                          email: params.email
                      }
                      // firestore()
                      //     .collection('Users')
                      //     .doc(uid)
                      //     .set(setData)
                      //     .then(() => {
                      //         console.log('User added!');
                      //         RootNavigation.pop()
                      //     }).catch(() => {
                      //         console.log('User not Add!');
                      //     })

                  })
                  .catch(error => {
                      if (error.code === 'auth/email-already-in-use') {
                          console.log('That email address is already in use!');
                      }
                      console.log(error);
                  });




          } else {
              Alert.alert('UYARI', 'Lütfen geçerli bir email yazınız!')
          }
      } else {
          Alert.alert('UYARI', 'Lütfen bütün alanları doldurunuz!')
      }
  }
}


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
