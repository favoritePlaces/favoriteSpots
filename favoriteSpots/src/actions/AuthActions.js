import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SIGN_OUT_SUCCESS,
} from './types';

import {
  Alert
} from 'react-native';
import * as RootNavigation from '../RootNavigation';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const login = (params) => {
  return (dispatch) => {
    if (params.email != '' && params.password != '') {
      if (validateEmail(params.email)) {
        dispatch({
          type: LOGIN_START
        });
        console.log('login',params.email, params.password);
        auth()
          .signInWithEmailAndPassword(params.email, params.password)
          .then((data) => {
            console.log('signed in!', data);
            const uid = data.user._user.uid;

            // read user from db
            firestore()
              .collection('Users')
              .doc(uid)
              .get().then((user) => {
                console.log('Gelen Data login: ', user._data);

                const userParams = {
                  ...user._data,
                  uid
                }
                dispatch({
                  type: LOGIN_SUCCESS,
                  payload: userParams
                })


              }).catch((err) => {
                console.log('Read Data error: ', err);
                dispatch({
                  type: LOGIN_FAILED
                })
              })
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
            dispatch({
              type: LOGIN_FAILED
            })
          })
      } else {
        Alert.alert('UYARI', 'Lütfen geçerli bir email yazınız!');
      }
    } else {
      Alert.alert('UYARI', 'Lütfen bütün alanları doldurunuz!');
    }
  };
};

export const signUp = (params) => {
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
            firestore()
              .collection('Users')
              .doc(uid) //unique Id given here
              .set(setData)
              .then(() => {
                console.log('User is created!');
                Alert.alert('Got it', 'Your account has been created!', [{
                  text: "OK",
                  onPress: () => RootNavigation.pop()
                }], {
                  cancelable: false
                });

              }).catch(() => {
                console.log('User is not created!');
              })

          })
          .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              Alert.alert('Warning', 'That email address is already in use!!')
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

export const isUser = () => {
  return (dispatch) => {

    auth().onAuthStateChanged((user) => {
      console.log('Is user:', user);
      if(user) {
       
          const uid = user._user.uid;
          getUser(uid, dispatch)
      } else {
        console.log('no user')
          dispatch({ type: LOGIN_FAILED })
      }
  });
  }
}

const getUser = (uid, dispatch) => {
  // read user from db
  firestore()
      .collection('Users')
      .doc(uid)
      .get().then((user) => {
          console.log('Gelen Data get User: ', user._data);
          const userParams = {
              ...user._data,
              uid
          }

          dispatch({ type: LOGIN_SUCCESS, payload: userParams })
      }).catch((err) => {
          console.log('Read Data error: ', err);
          dispatch({ type: LOGIN_FAILED })
      })
}

export const signOut = () => {
  return (dispatch) => {
    auth()
    .signOut()
    .then(() => {
        dispatch({ type: SIGN_OUT_SUCCESS })
    });
    //  RootNavigation.replace('Entrance');
  };
};

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}