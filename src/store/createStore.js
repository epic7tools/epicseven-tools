import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import isProd from '../util/isProd';
import middleware from './middleware';
import devMiddleware from './devMiddleware';

export default (reducer, initialState = {}) => {
	const enhancer = isProd()
		? applyMiddleware(...middleware)
		: composeWithDevTools(applyMiddleware(...devMiddleware));
	return createStore(reducer, initialState, enhancer);
};
