import { createStore, applyMiddleware } from 'redux';
import {logger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'

import {reducer} from './reducers'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger, thunkMiddleware)))
export default store
