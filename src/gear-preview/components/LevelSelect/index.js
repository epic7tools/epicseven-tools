import {connect} from 'react-redux';
import LevelSelect from './LevelSelect';

const mapState = () => ({
	items: [
		{
			label: '50',
			value: 'max5',
		},
		{
			label: '60',
			value: 'max6',
		},
	],
});

export default connect(
	mapState,
	() => ({})
)(LevelSelect);
