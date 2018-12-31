import {batchActions} from 'redux-batched-actions';
import getArtifacts from './requests/getArtifacts';
import getEquipmentStats from './requests/getEquipmentStats';
import getEquipmentType from './requests/getEquipmentType';
import getHeroes from './requests/getHeroes';
import getResources from './requests/getResources';
import getStats from './requests/getStats';
import getStatusEffects from './requests/getStatusEffects';

export default () => dispatch => {
	dispatch(
		batchActions([
			getHeroes(),
			getArtifacts(),
			getResources(),
			getStatusEffects(),
			getStats(),
			getEquipmentStats(),
			getEquipmentType(),
		])
	);
};
