import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import getEquipmentTypes from '../../../core/selectors/getEquipmentTypes';
import changeGear from '../../actions/basic/changeGear';
import selectHero from '../../actions/basic/selectHero';
import getSelectedHeroId from '../../selectors/getHeroId';
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
