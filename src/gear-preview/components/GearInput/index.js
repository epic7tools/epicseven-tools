import {connect} from 'react-redux';
import onChangeGearSet from '../../actions/onChangeGearSet';
import getGear from '../../selectors/getGear';
import GearInput from './GearInput';

const mapState = (state, ownProps) => ({
	values: getGear(state)[ownProps.name],
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
	onGearsetChange: value => {
		dispatch(
			onChangeGearSet({
				set: value,
				piece: ownProps.name,
			})
		);
	},
});

export default connect(
	mapState,
	mapDispatch
)(GearInput);
