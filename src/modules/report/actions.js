import axios from 'axios';
import { NavigationActions } from 'react-navigation';
import * as actionTypes from './actionTypes';

export const getReport = (dateFrom, dateTo) => dispatch => {
  const request = () => ({ type: actionTypes.GET_REPORT });
  const success = response => ({ type: actionTypes.GET_REPORT_SUCCESS, payload: response });
  const fail = error => ({ type: actionTypes.GET_REPORT_FAIL, payload: error });
  dispatch(request());
  axios({
    method: 'post',
    url: '/activity/stats/',
    data: {
      dateFrom,
      dateTo,
    },
  })
    .then(response => {
      dispatch(success(response));
      dispatch(NavigationActions.navigate({ routeName: 'Report' }));
    })
    .catch(error => dispatch(fail(error)));
};
