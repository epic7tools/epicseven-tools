import {createAction} from 'redux-actions';
import {ROOT_ACTION_PREFIX} from '../../constants';

export default createAction(`${ROOT_ACTION_PREFIX}/loadFailure`);
