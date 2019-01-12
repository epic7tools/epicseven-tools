import {connect} from 'react-redux';
import getEquipmentTypes from '../../selectors/getEquipmentTypes';
import GearPreview from './GearPreview';

const mapState = state => ({
	equipment: getEquipmentTypes(state),
});

export default connect(
	mapState,
	() => ({})
)(GearPreview);
