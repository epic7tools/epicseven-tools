import getHero from '../../core/actions/requests/getHero';
import callApi from '../../core/actions/util/callApi';
import getHeroById from '../../core/selectors/getHeroById';
import selectHero from './basic/selectHero';
import selectHeroFailure from './basic/selectHeroFailure';
import selectHeroSuccess from './basic/selectHeroSuccess';

export default heroId => (dispatch, getState) => {
	if (heroId && !getHeroById(getState(), heroId).gameId) {
		dispatch(selectHero());
		callApi(dispatch, getHero(heroId))
			.then(() => {
				dispatch(selectHeroSuccess(heroId));
			})
			.catch(() => dispatch(selectHeroFailure()));
	} else {
		dispatch(selectHeroSuccess(heroId));
	}
};
