import {devToolsEnhancer} from 'redux-devtools-extension';
import enhancers from '../prod/enhancers';

export default [devToolsEnhancer(), ...enhancers];
