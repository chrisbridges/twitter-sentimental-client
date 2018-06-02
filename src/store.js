import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {stockReducer} from './reducers/reducers';

export default createStore(stockReducer, applyMiddleware(thunk));