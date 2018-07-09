import * as actionTypes from './actionTypes';

export const addTask = (activityName, category, startDate) => ({
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
    options: {
      onSuccess: ({ dispatch }) => dispatch(getCurrentTask()),
      onError: () => console.log('fail'),
    },
  },
});

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

export function getCurrentTask() {
  return {
    type: actionTypes.GET_CURRENT_TASK,
    payload: {
      request: {
        method: 'get',
        url: '/activity/checkActivity',
      },
    },
  };
}

export function setCurrentTaskTime(currentTaskTime) {
  return {
    type: actionTypes.SET_CURRENT_TASK_TIME,
    payload: { currentTaskTime },
  };
}

export function iterateCurrentTaskTime(iteratedTime) {
  return {
    type: actionTypes.ITERATE_CURRENT_TASK_TIME,
    payload: { iteratedTime },
  };
}

export function deleteTask(pk) {
  return {
    type: actionTypes.DELETE_TASK,
    payload: {
      request: {
        method: 'get',
        url: `/activity/delete?id=${pk}`,
      },
      pk,
    },
  };
}

export function stopTask(activityId, stopDate) {
  return {
    type: actionTypes.STOP_TASK,
    payload: {
      request: {
        method: 'post',
        url: '/activity/stop/',
        data: {
          activityId,
          stopDate,
        },
      },
      // options: {
      //   onSuccess: () => dispatch(getTasks()),
      //   onError: () => console.log('fail'),
      // },
    },
  };
}

export const stopTaskAction = (activityId, stopDate) => dispatch => {
  dispatch(stopTask(activityId, stopDate))
    .then(() => dispatch(getTasks()))
    .then(() => dispatch(getCurrentTask()));
};

export const addTaskAction = dispatch => {};
