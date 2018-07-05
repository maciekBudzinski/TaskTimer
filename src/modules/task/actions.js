import * as actionTypes from './actionTypes';

export function addTask(startDate, activityName, category) {
  return {
    type: actionTypes.ADD_TASK,
    payload: {
      request: {
        method: 'post',
        url: '/activity/start/',
        data: {
          startDate,
          activityName,
          category,
        },
      },
    },
  };
}

export function getTasks() {
  return {
    type: actionTypes.GET_TASKS,
    payload: {
      request: {
        method: 'get',
        url: '/activity/list/',
      },
    },
  };
}
