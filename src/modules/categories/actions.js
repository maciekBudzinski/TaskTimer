import * as actionTypes from './actionTypes';

export function addCategory() {
  return {
    type: actionTypes.ADD_CATEGORY,
    payload: {
      request: {
        method: 'post',
        url: '/categories/add',
      },
    },
  };
}
