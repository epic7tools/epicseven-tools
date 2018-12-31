import {GET_RESOURCES, GET_RESOURCES_FAILURE, GET_RESOURCES_SUCCESS} from '../../actionTypes';
import resource from '../../schemas/resource';
import {API_URL} from '../../util/env';
import createGetRequest from './createGetRequest';

export default () =>
	createGetRequest([resource], {
		endpoint: `${API_URL}/resources`,
		types: [GET_RESOURCES, GET_RESOURCES_SUCCESS, GET_RESOURCES_FAILURE],
	});
