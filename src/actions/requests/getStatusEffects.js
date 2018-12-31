import statusEffects from '../../schemas/statusEffects';
import createGetRequest from './createGetRequest';

export default () => createGetRequest('status-effects', [statusEffects]);
