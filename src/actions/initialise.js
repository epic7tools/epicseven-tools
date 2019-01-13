import {batchActions} from 'redux-batched-actions';
import getArtifacts from './requests/getArtifacts';
import getHeroes from './requests/getHeroes';
import getResources from './requests/getResources';
import getStatusEffects from './requests/getStatusEffects';

export default () => dispatch => {
	dispatch(batchActions([getHeroes(), getArtifacts(), getResources(), getStatusEffects()]));
};
