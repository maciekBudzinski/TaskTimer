import moment, { isMoment, isDate } from 'moment';
import * as actionTypes from './actionTypes';

const initialState = {
  isLoading: false,
  taskAdded: false,
  taskStopped: false,
  tasks: [],
  isActiveTask: false,
  currentTask: null,
  currentTaskTime: null,
  filter: {
    category: null,
    startDate: null,
    endDate: null,
    tasks: null,
    active: false,
  },
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
        isActiveTask: true,
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
    case actionTypes.GET_TASKS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        tasks: action.payload.data,
      };
    }
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
        isActiveTask: true,
      };
    case actionTypes.GET_CURRENT_TASK_FAIL:
      return {
        ...state,
        isLoading: false,
        currentTask: null,
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

    case actionTypes.DELETE_TASK:
      return {
        ...state,
        isLoading: true,
        deletingTask: action.payload.pk,
      };

    case actionTypes.DELETE_TASK_SUCCESS: {
      const index = state.tasks.map(t => t.pk).indexOf(action.payload.pk);
      return {
        ...state,
        isLoading: false,
        tasks: [...state.tasks.slice(0, index), ...state.tasks.slice(index + 1)],
      };
    }
    case actionTypes.DELETE_TASK_FAIL:
      return {
        ...state,
        isLoading: false,
      };

    case actionTypes.STOP_TASK:
      return {
        ...state,
        isLoading: true,
        taskStopped: false,
      };
    case actionTypes.STOP_TASK_SUCCESS:
      return {
        ...state,
        isLoading: false,
        taskStopped: true,
        currentTask: null,
        isActiveTask: false,
      };
    case actionTypes.STOP_TASK_FAIL: {
      return {
        ...state,
        isLoading: false,
      };
    }

    case actionTypes.FILTER_TASKS: {
      const filterTasks = [];
      state.tasks.forEach(t => {
        if (t.Category === action.payload.category || action.payload.category === -1) {
          if (!isDate(action.payload.startDate) || moment(t.StartTime).isAfter(moment(action.payload.startDate)))
            if (
              !isDate(action.payload.endDate) ||
              (isMoment(moment(action.payload.endDate)) && moment(t.StopTime).isBefore(moment(action.payload.endDate)))
            )
              filterTasks.push(t);
        }
      });

      return {
        ...state,
        filter: {
          ...state.filter,
          category: action.payload.category,
          startDate: action.payload.startDate,
          endDate: action.payload.endDate,
          tasks: filterTasks,
          active: true,
        },
      };
    }
    case actionTypes.CLEAR_FILTERS:
      return {
        ...state,
        filter: {
          ...state.filter,
          category: -1,
          startDate: null,
          endDate: null,
          tasks: state.tasks,
          active: false,
        },
      };
  }
}
