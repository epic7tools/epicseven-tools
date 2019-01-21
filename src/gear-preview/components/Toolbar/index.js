import {connect} from 'react-redux';
import Toolbar from './Toolbar';

const mapDispatch = dispatch => ({
	onHeroChange: change => {
		console.log('Changing hero:', change);
	},
	onAwakeningChange: change => {
		console.log('Changing awakening', change);
	},
	onLevelChange: change => {
		console.log('Changing level', change);
	},
});

export default connect(
	null,
	mapDispatch
)(Toolbar);
