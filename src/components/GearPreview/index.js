import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import changeGear from '../../actions/changeGear';
import selectHero from '../../actions/selectHero';
import getEquipmentTypes from '../../selectors/getEquipmentTypes';
import getSelectedHeroFullStats from '../../selectors/getSelectedHeroFullStats';
import GearPreview from './GearPreview';

const mapState = state => ({
	hero: getSelectedHeroFullStats(state),
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
