import {batchActions} from 'redux-batched-actions';
import callApis from '../../core/actions/util/callApis';
import loadingHeroInfo from './basic/loadingHeroInfo';
import loadingHeroInfoFail from './basic/loadingHeroInfoFail';
import loadingHeroInfoSuccess from './basic/loadingHeroInfoSuccess';

export default (requests, onSuccess = [], onFail = []) => dispatch => {
	dispatch(loadingHeroInfo());

	callApis(requests)(dispatch)
		.then(() => dispatch(batchActions([loadingHeroInfoSuccess(), ...onSuccess])))
		.catch(() => dispatch(batchActions([loadingHeroInfoFail(), ...onFail])));
};
