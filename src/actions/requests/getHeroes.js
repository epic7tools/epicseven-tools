import hero from '../../schemas/hero';
import createGetRequest from './createGetRequest';

export default () => createGetRequest('heroes', [hero]);