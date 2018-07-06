import * as actionTypes from './actionTypes';

export function addTask(activityName, category, startDate) {
  console.log(activityName, category, startDate);
  return {
    type: actionTypes.ADD_TASK,
    payload: {
      request: {
        method: 'post',
        url: '/activity/start/',
        data: {
          activityName,
          category,
          startDate,
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
