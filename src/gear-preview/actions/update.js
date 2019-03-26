import {batchActions} from 'redux-batched-actions';
import fetchHero from '../../core/actions/requests/fetchHero';
import callApis from '../../core/actions/util/callApis';
import loadingHeroInfo from './basic/loadingHeroInfo';
import loadingHeroInfoFail from './basic/loadingHeroInfoFail';
import loadingHeroInfoSuccess from './basic/loadingHeroInfoSuccess';
import fetchHeroBaseStats from './requests/fetchHeroBaseStats';
import fetchHeroEquippedStats from './requests/fetchHeroEquippedStats';

export default (requests, action, stage=0) => (dispatch, getState) => {
	dispatch(batchActions(loadingHeroInfo(), action));

	const requests = [
			fetchHero(id),
			fetchHeroBaseStats(id, stars, awakening),
			fetchHeroEquippedStats(id, {
				id,
				stars,
				level: 0,
				awakening,
				...test,
			}),
		],
	]
	callApis(requests.filter((el, index) => index >= stage)(dispatch)
		.then(() => dispatch(loadingHeroInfoSuccess()))
		.catch(() => dispatch(loadingHeroInfoFail()));
};
