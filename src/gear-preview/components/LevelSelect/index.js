import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import selectLevel from '../../actions/selectLevel';
import getSelectedLevel from '../../selectors/getSelectedLevel';
import LevelSelect from './LevelSelect';

const mapState = state => ({
	items: [
		{
			label: '5* 50',
			value: 'max5',
		},
		{
			label: '6* 60',
			value: 'max6',
		},
	],
	value: getSelectedLevel(state),
});

const mapDispatch = dispatch =>
	bindActionCreators(
		{
			onChange: event => selectLevel(event.target.value),
		},
		dispatch
	);

export default connect(
	mapState,
	mapDispatch
)(LevelSelect);
