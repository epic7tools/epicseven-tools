import {GET_ITEMS, GET_ITEMS_FAILURE, GET_ITEMS_SUCCESS} from '../../constants/actionTypes';
import item from '../../schemas/item';
import {API_URL} from '../../util/env';
import createGetRequest from './createGetRequest';

export default () =>
	createGetRequest([item], {
		endpoint: `${API_URL}/items`,
		types: [GET_ITEMS, GET_ITEMS_SUCCESS, GET_ITEMS_FAILURE],
	});
