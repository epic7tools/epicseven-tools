import {
	GET_EQUIPMENT_TYPES,
	GET_EQUIPMENT_TYPES_FAILURE,
	GET_EQUIPMENT_TYPES_SUCCESS,
} from '../../actionTypes';
import equipmentType from '../../schemas/equipmentType';
import {API_URL} from '../../util/env';
import createGetRequest from './createGetRequest';

export default () =>
	createGetRequest([equipmentType], {
		endpoint: `${API_URL}/equipment-types?_sort=order`,
		types: [GET_EQUIPMENT_TYPES, GET_EQUIPMENT_TYPES_SUCCESS, GET_EQUIPMENT_TYPES_FAILURE],
	});
