/* eslint-disable import/no-cycle */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import selectionReducer from './features/selection/selectionSlice';
import nodeReducer from './features/graph/nodeSlice';
import edgeReducer from './features/graph/edgeSlice';
import buttonReducer from './components/top_menu/buttonSlice';
import switchReducer from './components/bottom_menu/switchSlice';
import submitReducer from './components/bottom_menu/submitSlice';
import logReducer from './components/float_menu/floatLogSlice';
import sendLogReducer from './features/graph/sendLogSlice';
import configureReducer from './components/float_menu/floatConfigureSlice';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    modeSelection: selectionReducer,
    newNode: nodeReducer,
    newEdge: edgeReducer,
    buttonState: buttonReducer,
    switchState: switchReducer,
    submitState: submitReducer,
    logState: logReducer,
    sendLogState: sendLogReducer,
    configureState: configureReducer,
  });
}
