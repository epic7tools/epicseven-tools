import isProd from 'core/util/isProd';
import {applyMiddleware, compose, createStore} from 'redux';
import devEnhancers from './dev/enhancers';
import devMiddleware from './dev/middleware';
import prodEnhancers from './prod/enhancers';
import prodMiddleware from './prod/middleware';

export default (reducer, initialState = {}) => {
	const enhancers = isProd() ? prodEnhancers : devEnhancers;
	const middleware = isProd() ? prodMiddleware : devMiddleware;

	const enhancer = compose(
		applyMiddleware(...middleware),
		...enhancers
	);
	return createStore(reducer, initialState, enhancer);
};
