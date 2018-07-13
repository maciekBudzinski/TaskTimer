import axios from 'axios';
import * as actionTypes from './actionTypes';

export const customerLogin = (email, password) => dispatch => {
  const request = () => dispatch({ type: actionTypes.CUSTOMER_LOGIN });
  const success = response => dispatch({ type: actionTypes.CUSTOMER_LOGIN_SUCCESS, payload: response });
  const fail = error => dispatch({ type: actionTypes.CUSTOMER_LOGIN_FAIL, payload: error });
  dispatch(request());
  axios({
    method: 'post',
    url: '/api/login/',
    data: {
      password,
      email,
    },
  })
    .then(response => dispatch(success(response)))
    .catch(error => dispatch(fail(error)));
};

export const customerRegistration = (firstName, lastName, email, password, confirmPassword) => dispatch => {
  const request = () => dispatch({ type: actionTypes.CUSTOMER_REGISTRATION });
  const success = response => dispatch({ type: actionTypes.CUSTOMER_REGISTRATION_SUCCESS, payload: response });
  const fail = error => dispatch({ type: actionTypes.CUSTOMER_REGISTRATION_FAIL, payload: error });
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
    .then(response => dispatch(success(response)))
    .catch(error => dispatch(fail(error)));
};

export const customerLogout = () => ({
  type: actionTypes.CUSTOMER_LOGOUT,
});
