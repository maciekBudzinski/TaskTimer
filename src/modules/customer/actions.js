import * as actionTypes from './actionTypes';

export function customerLogin(email, password) {
  console.log(email, password);
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
