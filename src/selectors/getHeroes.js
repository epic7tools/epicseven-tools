import {createSelector} from 'reselect';
import getHeroEntities from './getHeroEntities';
import getHeroIDs from './getHeroIDs';

export default createSelector(
	getHeroIDs,
	getHeroEntities,
	(ids, entities) => ids.map(id => entities[id])
);
