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

    case actionTypes.CUSTOMER_REGISTRATION:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
      };

    case actionTypes.CUSTOMER_REGISTRATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
      };
    case actionTypes.CUSTOMER_REGISTRATION_FAIL:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
      };
    case actionTypes.CUSTOMER_LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return {
        ...state,
      };
  }
}
