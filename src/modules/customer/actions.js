import * as actionTypes from './actionTypes';

export function customerLogin(email, password) {
  return {
    type: actionTypes.CUSTOMER_LOGIN,
    payload: {
      request: {
        method: 'post',
        url: '/api/login/',
        data: {
          password,
          email,
        },
      },
    },
  };
}
export function customerRegistration(firstName, lastName, email, password, confirmPassword) {
  console.log(firstName, lastName, email, password, confirmPassword);
  return {
    type: actionTypes.CUSTOMER_REGISTRATION,
    payload: {
      request: {
        method: 'post',
        url: '/api/register/',
        data: {
          firstName,
          lastName,
          email,
          password,
          confirm_password: confirmPassword,
        },
      },
    },
  };
}
export function customerLogout() {
  return {
    type: actionTypes.CUSTOMER_LOGOUT,
  };
}
