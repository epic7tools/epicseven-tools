import {createSelector} from 'reselect';
import getHeroEntities from '../../core/selectors/getHeroEntities';
import getSelectedHeroId from './getHeroId';

export default createSelector(
	getSelectedHeroId,
	getHeroEntities,
	(id, entities) => entities[id]
);
