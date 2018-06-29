import { navigationActions } from '../constans/actionTypes';
import { screenNames } from '../constans/screenNames';

const initialState = {
  currentForm: 'login',
  currentScreen: screenNames.Start,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case navigationActions.CHANGE_FORM:
      return {
        currentForm: action.form,
      };
    case navigationActions.CHANGE_SCREEN:
      return {
        currentScreen: action.screen,
      };
    default:
      return {
        ...state,
      };
  }
}
