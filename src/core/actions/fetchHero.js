import getHeroById from '../selectors/getHeroById';
import fetchHero from './requests/fetchHero';
import callApi from './util/callApi';

export default id => (dispatch, getState) => {
	if (id && !getHeroById(getState(), id).gameId) {
		return callApi(dispatch, fetchHero(id));
	} else {
		return Promise.ok();
	}
};
