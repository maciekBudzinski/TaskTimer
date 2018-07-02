import * as actionTypes from './actionTypes';

const initialState = {
  currentForm: 'login',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_FORM:
      return {
        currentForm: action.form,
      };
    default:
      return {
        ...state,
      };
  }
}
