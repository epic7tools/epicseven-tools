import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import changeGear from '../../actions/changeGear';
import selectHero from '../../actions/selectHero';
import getEquipmentTypes from '../../selectors/getEquipmentTypes';
import getGearStatsFlattened from '../../selectors/getGearStatsFlattened';
import getSelectedHero from '../../selectors/getSelectedHero';
import GearPreview from './GearPreview';

const mapState = state => ({
	hero: getSelectedHero(state),
	equipment: getEquipmentTypes(state),
	test: getGearStatsFlattened(state),
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
