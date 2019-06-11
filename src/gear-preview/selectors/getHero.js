import getHeroEntities from 'core/selectors/getHeroEntities';
import {createSelector} from 'reselect';
import getSelectedHeroId from './getHeroId';

export default createSelector(
	getSelectedHeroId,
	getHeroEntities,
	(id, entities) => entities[id]
);
