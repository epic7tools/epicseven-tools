import {applyMiddleware, createStore} from 'redux';
import isProd from '../util/isProd';
import middleware from './middleware';
import devMiddleware from './devMiddleware';

export default (reducer, initialState = {}) => {
	const middlewares = isProd() ? middleware : devMiddleware;
	return createStore(reducer, initialState, applyMiddleware(...middlewares));
};
