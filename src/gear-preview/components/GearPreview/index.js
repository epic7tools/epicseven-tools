import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import getEquipmentTypes from '../../../core/selectors/getEquipmentTypes';
import changeGear from '../../actions/changeGear';
import selectHero from '../../actions/selectHero';
import getSelectedHeroId from '../../selectors/getSelectedHeroId';
import GearPreview from './GearPreview';

const mapState = state => ({
	hero: getSelectedHeroId(state),
	equipment: getEquipmentTypes(state),
});

const mapDispatch = dispatch => ({
	...bindActionCreators(
		{
			onHeroChange: selectHero,
			onGearChange: changeGear,
		},
		dispatch
	),
});

export default connect(
	mapState,
	mapDispatch
)(GearPreview);
