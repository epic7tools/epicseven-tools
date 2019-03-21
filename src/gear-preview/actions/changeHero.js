import getHero from '../../core/actions/requests/getHero';
import getHeroById from '../../core/selectors/getHeroById';
import heroLoad from './heroLoad';
import selectHero from './selectHero';

export default heroId => (dispatch, getState) => {
	if (heroId && !getHeroById(getState(), heroId).gameId) {
		dispatch(heroLoad());
		dispatch(getHero(heroId)).then(() => {
			dispatch(selectHero(heroId));
		});
	} else {
		dispatch(selectHero(heroId));
	}
};
