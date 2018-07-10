import axios from 'axios';
import moment from 'moment';
import * as actionTypes from './actionTypes';

export const addTask = (activityName, category, startDate) => dispatch => {
  const request = () => ({ type: actionTypes.ADD_TASK });
  const success = response => ({ type: actionTypes.ADD_TASK_SUCCESS, payload: response });
  const fail = error => ({ type: actionTypes.ADD_TASK_FAIL, payload: error });

  dispatch(request());
  axios({
    method: 'post',
    url: '/activity/start/',
    data: {
      activityName,
      category,
      startDate,
    },
  })
    .then(response => dispatch(success(response)))
    .catch(error => dispatch(fail(error)));
};

export const getTasks = () => dispatch => {
  const request = () => ({ type: actionTypes.GET_TASKS });
  const success = response => ({ type: actionTypes.GET_TASKS_SUCCESS, payload: response });
  const fail = error => ({ type: actionTypes.GET_TASKS_FAIL, payload: error });

  dispatch(request());
  axios({
    method: 'get',
    url: '/activity/list/',
  })
    .then(response => dispatch(success(response)))
    .catch(error => dispatch(fail(error)));
};

export const getCurrentTask = () => dispatch => {
  const request = () => ({ type: actionTypes.GET_CURRENT_TASK });
  const success = response => ({ type: actionTypes.GET_CURRENT_TASK_SUCCESS, payload: response });
  const fail = error => ({ type: actionTypes.GET_CURRENT_TASK_FAIL, payload: error });
  dispatch(request());
  axios({
    method: 'get',
    url: '/activity/checkActivity',
  })
    .then(response => {
      const currentTask = response.data;
      let currentTimeDiff = moment(moment().diff(moment(currentTask.StartTime).add('2', 'hours')));
      dispatch(success(response));
      dispatch(setCurrentTaskTime(currentTimeDiff));
      setInterval(() => {
        currentTimeDiff = moment(currentTimeDiff).add(1, 'seconds');
        dispatch(iterateCurrentTaskTime(currentTimeDiff));
      }, 10000);
    })
    .catch(error => dispatch(fail(error)));
};

export const setCurrentTaskTime = currentTaskTime => ({
  type: actionTypes.SET_CURRENT_TASK_TIME,
  payload: { currentTaskTime },
});

export const iterateCurrentTaskTime = iteratedTime => ({
  type: actionTypes.ITERATE_CURRENT_TASK_TIME,
  payload: { iteratedTime },
});

export const deleteTask = pk => dispatch => {
  const request = () => ({ type: actionTypes.DELETE_TASK, payload: pk });
  const success = response => ({ type: actionTypes.DELETE_TASK_SUCCESS, payload: response });
  const fail = error => ({ type: actionTypes.DELETE_TASK_FAIL, payload: error });
  dispatch(request());
  axios({
    method: 'get',
    url: `/activity/delete?id=${pk}`,
  })
    .then(response => dispatch(success(response)))
    .catch(error => dispatch(fail(error)));
};

export const stopTask = (activityId, stopDate) => dispatch => {
  const request = () => ({ type: actionTypes.STOP_TASK });
  const success = response => ({ type: actionTypes.STOP_TASK_SUCCESS, payload: response });
  const fail = error => ({ type: actionTypes.STOP_TASK_FAIL, payload: error });
  dispatch(request());
  axios({
    method: 'post',
    url: '/activity/stop/',
    data: {
      activityId,
      stopDate,
    },
  })
    .then(response => dispatch(success(response)))
    .catch(error => dispatch(fail(error)));
};
