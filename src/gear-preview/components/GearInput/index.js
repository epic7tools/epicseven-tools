import {connect} from 'react-redux';
import GearInput from './GearInput';

const mapState = (state, ownProps) => ({
	onChange: change => {
		if (ownProps.onChange) {
			ownProps.onChange({
				[ownProps.name]: change,
			});
		}
	},
});

export default connect(
	mapState,
	() => ({})
)(GearInput);
