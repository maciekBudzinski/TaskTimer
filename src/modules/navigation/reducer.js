import * as actionTypes from './actionTypes';

const initialState = {
  currentForm: 'login',
  filtersOpen: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_FORM:
      return {
        currentForm: action.form,
      };
    case actionTypes.OPEN_FILTERS:
      return {
        filtersOpen: true,
      };
    case actionTypes.CLOSE_FILTERS:
      return {
        filtersOpen: false,
      };
    default:
      return {
        ...state,
      };
  }
}
