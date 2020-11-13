/* eslint-disable import/no-cycle */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import selectionReducer from './features/selection/selectionSlice';
import nodeReducer from './features/graph/nodeSlice';
import edgeReducer from './features/graph/edgeSlice';
import buttonReducer from './components/top_menu/buttonSlice';
import switchReducer from './components/bottom_menu/switchSlice';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    modeSelection: selectionReducer,
    newNode: nodeReducer,
    newEdge: edgeReducer,
    buttonState: buttonReducer,
    switchState: switchReducer,
  });
}
