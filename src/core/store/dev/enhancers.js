import enhancers from 'core/store/prod/enhancers';
import {devToolsEnhancer} from 'redux-devtools-extension';

export default [devToolsEnhancer(), ...enhancers];
