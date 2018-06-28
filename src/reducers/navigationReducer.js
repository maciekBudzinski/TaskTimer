import { navigationActions } from '../constans/actionTypes';

const initialState = {
  currentForm: 'login',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case navigationActions.CHANGE_FORM:
      console.log(action.payload);
      return {
        currentForm: action.form,
      };
    default:
      return {
        ...state,
      };
  }
}
