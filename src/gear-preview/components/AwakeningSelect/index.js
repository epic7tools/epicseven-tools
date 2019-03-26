import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import StarsInput from '../../../core/components/StarsInput';
import onChangeAwakening from '../../actions/onChangeAwakening';
import getAwakenedStars from '../../selectors/getAwakenedStars';
import getStars from '../../selectors/getStars';

const mapState = state => ({
	value: getAwakenedStars(state),
	maximum: getStars(state),
	label: 'Awakening',
});

const mapDispatch = dispatch => bindActionCreators({onChange: onChangeAwakening}, dispatch);

export default connect(
	mapState,
	mapDispatch
)(StarsInput);
