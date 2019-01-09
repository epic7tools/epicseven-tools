import {createSelector} from 'reselect';
import getStatEntities from './getStatEntities';
import getStatIDs from './getStatIDs';

export default createSelector(
	getStatIDs,
	getStatEntities,
	(ids, entities) => ids.map(id => entities[id])
);
