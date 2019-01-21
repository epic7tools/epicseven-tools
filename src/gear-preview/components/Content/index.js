import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import getEquipmentTypes from '../../../core/selectors/getEquipmentTypes';
import changeGear from '../../actions/changeGear';
import getSelectedHeroId from '../../selectors/getSelectedHeroId';
import Content from './Content';

const mapState = state => ({
	hero: getSelectedHeroId(state),
	equipment: getEquipmentTypes(state),
});

const mapDispatch = dispatch => bindActionCreators({onGearChange: changeGear}, dispatch);

export default connect(
	mapState,
	mapDispatch
)(Content);
