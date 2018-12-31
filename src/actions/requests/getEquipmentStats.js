import {
	GET_EQUIPMENT_STATS,
	GET_EQUIPMENT_STATS_FAILURE,
	GET_EQUIPMENT_STATS_SUCCESS,
} from '../../actionTypes';
import equipmentStat from '../../schemas/equipmentStat';
import {API_URL} from '../../util/env';
import createGetRequest from './createGetRequest';

export default () =>
	createGetRequest([equipmentStat], {
		endpoint: `${API_URL}/equipment-stat-types`,
		types: [GET_EQUIPMENT_STATS, GET_EQUIPMENT_STATS_SUCCESS, GET_EQUIPMENT_STATS_FAILURE],
	});
