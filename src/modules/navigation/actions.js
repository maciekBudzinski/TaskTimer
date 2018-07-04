import * as actionTypes from './actionTypes';

export function changeForm(form) {
  return {
    type: actionTypes.CHANGE_FORM,
    form,
  };
}

export function openFilters() {
  return {
    type: actionTypes.OPEN_FILTERS,
  };
}

export function closeFilters() {
  return {
    type: actionTypes.CLOSE_FILTERS,
  };
}
