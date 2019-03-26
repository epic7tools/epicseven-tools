import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import getEquipmentTypes from '../../../core/selectors/getEquipmentTypes';
import onChangeGear from '../../actions/onChangeGear';
import getHeroId from '../../selectors/getHeroId';
import Content from './Content';

const mapState = state => ({
	hero: getHeroId(state),
	equipment: getEquipmentTypes(state),
});

const mapDispatch = dispatch => bindActionCreators({onGearChange: onChangeGear}, dispatch);

export default connect(
	mapState,
	mapDispatch
)(Content);
