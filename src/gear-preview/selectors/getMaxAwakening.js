import {createSelector} from 'reselect';
import getSelectedLevel from './getSelectedLevel';

export default createSelector(
	getSelectedLevel,
	level => (level === 'max6' ? 6 : 5)
);
