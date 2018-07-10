import { NavigationActions } from 'react-navigation';

import { createNavigationReducer } from 'react-navigation-redux-helpers';

import RootNavigator from '../../helpers/navigation';

// const initialState = RootNavigator.router.getStateForAction(NavigationActions.init());

// export default (state = initialState, action) => {
//   const nextState = RootNavigator.router.getStateForAction(action, state);
//   return nextState || state;
// };

export default createNavigationReducer(RootNavigator);
