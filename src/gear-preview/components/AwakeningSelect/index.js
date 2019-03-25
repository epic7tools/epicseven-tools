import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import StarsInput from '../../../core/components/StarsInput';
import setAwakening from '../../actions/basic/setAwakening';
import getAwakenedStars from '../../selectors/getAwakenedStars';
import getStars from '../../selectors/getStars';

const mapState = state => ({
	value: getAwakenedStars(state),
	maximum: getStars(state),
	label: 'Awakening',
});

const mapDispatch = dispatch => bindActionCreators({onChange: setAwakening}, dispatch);

export default connect(
	mapState,
	mapDispatch
)(StarsInput);
