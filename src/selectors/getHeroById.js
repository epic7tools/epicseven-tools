import isEmpty from 'lodash.isempty';
import getHeroEntities from './getHeroEntities';

export default (state, id) => {
	const heroes = getHeroEntities(state);
	return isEmpty(heroes) ? null : heroes[id];
};
