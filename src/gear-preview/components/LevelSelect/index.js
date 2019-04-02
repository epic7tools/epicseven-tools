import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import StarsInput from '../../../core/components/StarsInput';
import onChangeLevel from '../../actions/onChangeLevel';
import getSelectedStars from '../../selectors/getStars';

const mapState = state => ({
	value: getSelectedStars(state),
	minimum: 5,
	maximum: 6,
	label: 'Level',
});

const mapDispatch = dispatch => bindActionCreators({onChange: onChangeLevel}, dispatch);

export default connect(
	mapState,
	mapDispatch
)(StarsInput);
