import * as actionTypes from './actionTypes';

const initialState = {
  isLoading: false,
  data: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_REPORT:
      return {
        ...state,
        isLoading: true,
      };

    case actionTypes.GET_REPORT_SUCCESS: {
      return {
        ...state,
        data: action.payload.data,
      };
    }

    case actionTypes.GET_REPORT_FAIL: {
      return {
        ...state,
        isLoading: false,
      };
    }

    default:
      return {
        ...state,
      };
  }
}
