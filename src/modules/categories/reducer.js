import * as actionTypes from './actionTypes';

const initialState = {
  isLoading: false,
  isSuccess: false,
  categories: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_CATEGORY:
      return {
        ...state,
        isSuccess: false,
        isLoading: true,
      };

    case actionTypes.ADD_CATEGORY_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
      };

    case actionTypes.ADD_CATEGORY_FAIL: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case actionTypes.GET_CATEGORIES:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        categories: action.payload.data,
      };
    case actionTypes.GET_CATEGORIES_FAIL:
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
