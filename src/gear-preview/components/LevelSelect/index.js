import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import StarsInput from '../../../core/components/StarsInput';
import setLevel from '../../actions/basic/setLevel';
import getSelectedStars from '../../selectors/getSelectedStars';

const mapState = state => ({
	value: getSelectedStars(state),
	minimum: 5,
	maximum: 6,
	label: 'Level',
});

const mapDispatch = dispatch => bindActionCreators({onChange: setLevel}, dispatch);

export default connect(
	mapState,
	mapDispatch
)(StarsInput);
