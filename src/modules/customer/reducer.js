import * as actionTypes from './actionTypes';

const initialState = {
  isLoading: false,
  isSuccess: false,
  isAuthenticated: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CUSTOMER_LOGIN:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.CUSTOMER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
      };

    case actionTypes.CUSTOMER_LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return {
        ...state,
      };
  }
}
