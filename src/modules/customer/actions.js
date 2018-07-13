import axios from 'axios';
import { NavigationActions } from 'react-navigation';
import { Toast } from 'native-base';
import { AsyncStorage } from 'react-native';
import * as actionTypes from './actionTypes';
import { changeForm } from '../navigation/actions';

export const customerLogin = (email, password) => dispatch => {
  const request = () => ({ type: actionTypes.CUSTOMER_LOGIN });
  const success = response => ({ type: actionTypes.CUSTOMER_LOGIN_SUCCESS, payload: response });
  const fail = error => ({ type: actionTypes.CUSTOMER_LOGIN_FAIL, payload: error });
  dispatch(request());
  axios({
    method: 'post',
    url: '/api/login/',
    data: {
      password,
      email,
    },
  })
    .then(response => {
      AsyncStorage.setItem('token', response.data.token);
      axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
      dispatch(success(response));
      dispatch(NavigationActions.navigate({ routeName: 'Home' }));
      Toast.show({ text: 'Zalogowano pomyślnie', type: 'success' });
    })
    .catch(error => {
      dispatch(fail(error));
      console.log(error);
      Toast.show({ text: `Błąd ${error.response.status}. Nie można zalogować`, type: 'danger' });
    });
};

export const customerRegistration = (firstName, lastName, email, password, confirmPassword) => dispatch => {
  const request = () => ({ type: actionTypes.CUSTOMER_REGISTRATION });
  const success = response => ({ type: actionTypes.CUSTOMER_REGISTRATION_SUCCESS, payload: response });
  const fail = error => ({ type: actionTypes.CUSTOMER_REGISTRATION_FAIL, payload: error });
  dispatch(request());
  axios({
    method: 'post',
    url: '/api/register/',
    data: {
      firstName,
      lastName,
      email,
      password,
      confirm_password: confirmPassword,
    },
  })
    .then(response => {
      dispatch(success(response));
      dispatch(changeForm('login'));
      Toast.show({ text: 'Rejestracja przebiegła pomyślnie. Zaloguj się', type: 'success' });
    })
    .catch(error => {
      dispatch(fail(error));
      Toast.show({ text: `Błąd ${error.response.status}. Nie można zarejestrować użytkownika`, type: 'danger' });
    });
};

export const customerLogout = () => dispatch => {
  dispatch(() => {
    AsyncStorage.removeItem('token')
      .then(value => console.log(value))
      .catch(error => console.log(error));
    axios.defaults.headers.common.Authorization = null;
  });
};
