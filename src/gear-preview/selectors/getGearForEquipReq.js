import merge from 'lodash.merge';
import {createSelector} from 'reselect';
import getGear from './getGear';
import {statsById} from '../../core/constants/stats';

export default createSelector(
	getGear,
	gear => {
		const gearRequest = {};
		Object.keys(gear).forEach(name => {
			const piece = gear[name];
			gearRequest[name] = {
				stats: {},
			};

			if (name !== 'artifact') {
				gearRequest[name].set = piece.set;
			}

			Object.keys(piece)
				.filter(sub => sub !== 'set')
				.forEach(sub => {
					const {stat, value} = piece[sub];
					if (stat && value) {
						const actualValue = statsById[stat].percentage
							? parseInt(value) / 100
							: parseInt(value);
						gearRequest[name].stats = merge({}, gearRequest[name].stats, {
							[stat]: actualValue,
						});
					}
				});
		});

		return gearRequest;
	}
);
