import * as actionTypes from './actionTypes';

export function addCategory(CategoryName, Color) {
  return {
    type: actionTypes.ADD_CATEGORY,
    payload: {
      request: {
        method: 'post',
        url: '/category/add/',
        data: {
          CategoryName,
          Color,
          Description: null,
        },
      },
    },
  };
}

export function getCategories() {
  return {
    type: actionTypes.GET_CATEGORIES,
    payload: {
      request: {
        method: 'get',
        url: '/category/list/',
      },
    },
  };
}
