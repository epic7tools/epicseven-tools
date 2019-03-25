import {createAction} from 'redux-actions';
import {GP_ACTION_PREFIX} from '../../constants';

export default createAction(`${GP_ACTION_PREFIX}/loadingHeroInfoFail`);
