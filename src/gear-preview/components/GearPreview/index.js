import getEquipmentTypes from 'core/selectors/getEquipmentTypes';
import changeGear from 'gear-preview/actions/basic/changeGear';
import selectHero from 'gear-preview/actions/basic/selectHero';
import getSelectedHeroId from 'gear-preview/selectors/getHeroId';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
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
