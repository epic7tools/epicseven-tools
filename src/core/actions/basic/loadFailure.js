import {ROOT_ACTION_PREFIX} from 'core/constants';
import {createAction} from 'redux-actions';

export default createAction(`${ROOT_ACTION_PREFIX}/loadFailure`);
