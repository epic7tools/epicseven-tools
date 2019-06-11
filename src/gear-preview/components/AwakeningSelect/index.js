import StarsInput from 'core/components/StarsInput';
import onChangeAwakening from 'gear-preview/actions/onChangeAwakening';
import getAwakenedStars from 'gear-preview/selectors/getAwakenedStars';
import getStars from 'gear-preview/selectors/getStars';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

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
