import {connect} from 'react-redux';
import getGearStats from '../../selectors/getGearStats';
import GearInput from './GearInput';

const mapState = (state, ownProps) => ({
	values: getGearStats(state)[ownProps.name],
});

const mapDispatch = (dispatch, ownProps) => ({
	onChange: change => {
		if (ownProps.onChange) {
			ownProps.onChange({
				piece: ownProps.name,
				...change,
			});
		}
	},
});

export default connect(
	mapState,
	mapDispatch
)(GearInput);
