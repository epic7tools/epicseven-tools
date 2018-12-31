import resource from '../../schemas/resource';
import createGetRequest from './createGetRequest';

export default () => createGetRequest('resources', [resource]);
