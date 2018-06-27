import { exampleActions } from '../constans/actionTypes';

const inintialState = {
  isExample: true,
};

export default function(state = inintialState, action) {
  switch (action.type) {
    case exampleActions:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
}
