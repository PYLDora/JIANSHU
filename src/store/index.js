import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import * as actiontypes from './actiontype';
import * as actionCreators from './actioncreator';

const store = createStore(reducer,applyMiddleware(thunk));

export  default  store;
export {actiontypes,actionCreators };