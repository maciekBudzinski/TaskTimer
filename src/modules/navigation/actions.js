import * as actionTypes from './actionTypes';

export function changeForm(form) {
  return {
    type: actionTypes.CHANGE_FORM,
    form,
  };
}
