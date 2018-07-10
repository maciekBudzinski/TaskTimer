import axios from 'axios';
import { NavigationActions } from 'react-navigation';
import * as actionTypes from './actionTypes';

export const addCategory = (CategoryName, Color) => dispatch => {
  const request = () => ({ type: actionTypes.ADD_CATEGORY });
  const success = response => ({ type: actionTypes.ADD_CATEGORY_SUCCESS, payload: response });
  const fail = error => ({ type: actionTypes.ADD_CATEGORY_FAIL, payload: error });
  dispatch(request());
  axios({
    method: 'post',
    url: '/category/add/',
    data: {
      CategoryName,
      Color,
      Description: null,
    },
  })
    .then(response => {
      dispatch(success(response));
      dispatch(NavigationActions.navigate({ routeName: 'Home' }));
    })
    .catch(error => dispatch(fail(error)));
};

export const getCategories = () => dispatch => {
  const request = () => ({ type: actionTypes.GET_CATEGORIES });
  const success = response => ({ type: actionTypes.GET_CATEGORIES_SUCCESS, payload: response });
  const fail = error => ({ type: actionTypes.GET_CATEGORIES_FAIL, payload: error });
  dispatch(request());
  axios({
    method: 'get',
    url: '/category/list/',
  })
    .then(response => dispatch(success(response)))
    .catch(error => dispatch(fail(error)));
};
