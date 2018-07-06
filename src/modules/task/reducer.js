import * as actionTypes from './actionTypes';

const initialState = {
  isLoading: false,
  taskAdded: false,
  tasks: [],
  currentTask: null,
  currentTaskTime: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_TASK:
      return {
        ...state,
        isLoading: true,
        taskAdded: false,
      };

    case actionTypes.ADD_TASK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        taskAdded: true,
      };

    case actionTypes.ADD_TASK_FAIL:
      return {
        ...state,
        isLoading: false,
      };

    case actionTypes.GET_TASKS:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.GET_TASKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tasks: action.payload.data,
      };
    case actionTypes.GET_TASKS_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    case actionTypes.GET_CURRENT_TASK:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.GET_CURRENT_TASK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentTask: action.payload.data,
      };
    case actionTypes.GET_CURRENT_TASK_FAIL:
      return {
        ...state,
        isLoading: false,
      };

    case actionTypes.SET_CURRENT_TASK_TIME:
      return {
        ...state,
        currentTaskTime: action.payload.currentTaskTime,
      };

    case actionTypes.ITERATE_CURRENT_TASK_TIME:
      return {
        ...state,
        currentTaskTime: action.payload.iteratedTime,
      };
    default:
      return {
        ...state,
      };
  }
}
