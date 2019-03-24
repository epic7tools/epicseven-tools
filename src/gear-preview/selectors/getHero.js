import {createSelector} from 'reselect';
import getHeroEntities from '../../core/selectors/getHeroEntities';
import getSelectedHeroId from './getSelectedHeroId';

export default createSelector(
	getSelectedHeroId,
	getHeroEntities,
	(id, entities) => entities[id]
);
