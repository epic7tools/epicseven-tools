import {apiMiddleware} from 'redux-api-middleware';
import thunk from 'redux-thunk';
import {batchDispatchMiddleware} from 'redux-batched-actions';

export default [batchDispatchMiddleware, apiMiddleware, thunk, batchDispatchMiddleware];
