import {
	GET_STATUS_EFFECTS,
	GET_STATUS_EFFECTS_FAILURE,
	GET_STATUS_EFFECTS_SUCCESS,
} from '../../constants/actionTypes';
import statusEffects from '../../schemas/statusEffects';
import {API_URL} from '../../util/env';
import createGetRequest from './createGetRequest';

export default () =>
	createGetRequest([statusEffects], {
		endpoint: `${API_URL}/status-effects`,
		types: [GET_STATUS_EFFECTS, GET_STATUS_EFFECTS_SUCCESS, GET_STATUS_EFFECTS_FAILURE],
	});
