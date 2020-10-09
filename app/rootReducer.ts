import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
// eslint-disable-next-line import/no-cycle
import selectionReducer from './features/selection/selectionSlice';
// import dashboardReducer from './features/dashboard/dashboardSlice';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    modeSelection: selectionReducer,
    // dashboardReducer,
  });
}
