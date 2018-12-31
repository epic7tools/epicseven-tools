import {apiMiddleware} from 'redux-api-middleware';
import {batchDispatchMiddleware} from 'redux-batched-actions';
import thunk from 'redux-thunk';

export default [batchDispatchMiddleware, apiMiddleware, thunk];
