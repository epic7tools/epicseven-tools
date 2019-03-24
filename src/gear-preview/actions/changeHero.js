import {batchActions} from 'redux-batched-actions';
import fetchHero from '../../core/actions/requests/fetchHero';
import callApi from '../../core/actions/util/callApi';
import getHeroById from '../../core/selectors/getHeroById';
import loadingHeroInfo from './basic/loadingHeroInfo';
import loadingHeroInfoComplete from './basic/loadingHeroInfoComplete';
import selectHero from './basic/selectHero';

export default heroId => (dispatch, getState) => {
	if (heroId && !getHeroById(getState(), heroId).gameId) {
		dispatch(loadingHeroInfo());
		callApi(dispatch, fetchHero(heroId))
			.then(() => {
				dispatch(batchActions([selectHero(heroId), loadingHeroInfoComplete()]));
			})
			.catch(() => dispatch(loadingHeroInfoComplete()));
	} else {
		dispatch(selectHero(heroId));
	}
};
