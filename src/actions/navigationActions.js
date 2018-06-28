import { navigationActions } from '../constans/actionTypes';

export function changeForm(form) {
  return {
    type: navigationActions.CHANGE_FORM,
    form,
  };
}
