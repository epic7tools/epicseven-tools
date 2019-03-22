import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import StarsInput from '../../../core/components/StarsInput';
import setAwakening from '../../actions/basic/setAwakening';
import getAwakenedStars from '../../selectors/getAwakenedStars';
import getSelectedStars from '../../selectors/getSelectedStars';

const mapState = state => ({
	value: getAwakenedStars(state),
	maximum: getSelectedStars(state),
	label: 'Awakening',
});

const mapDispatch = dispatch => bindActionCreators({onChange: setAwakening}, dispatch);

export default connect(
	mapState,
	mapDispatch
)(StarsInput);
