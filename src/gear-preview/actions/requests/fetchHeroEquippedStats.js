import createPostRequest from '../../../core/actions/requests/createPostRequest';
import {API_URL} from '../../../core/util/env';
import {
	FETCH_HERO_EQUIPPED_STATS,
	FETCH_HERO_EQUIPPED_STATS_FAILURE,
	FETCH_HERO_EQUIPPED_STATS_SUCCESS,
} from '../../constants/requestActionTypes';

export default (id, body) =>
	createPostRequest({
		endpoint: `${API_URL}/heroes/${id}/equip`,
		types: [
			FETCH_HERO_EQUIPPED_STATS,
			FETCH_HERO_EQUIPPED_STATS_SUCCESS,
			FETCH_HERO_EQUIPPED_STATS_FAILURE,
		],
		body,
	});
