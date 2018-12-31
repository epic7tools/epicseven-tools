import artifact from '../../schemas/artifact';
import createGetRequest from './createGetRequest';

export default () => createGetRequest('artifacts', [artifact]);
