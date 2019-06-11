import getEquipmentTypes from 'core/selectors/getEquipmentTypes';
import onChangeGear from 'gear-preview/actions/onChangeGear';
import getHeroId from 'gear-preview/selectors/getHeroId';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
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
