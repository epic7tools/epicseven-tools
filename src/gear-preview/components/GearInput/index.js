import onChangeGearSet from 'gear-preview/actions/onChangeGearSet';
import getGear from 'gear-preview/selectors/getGear';
import {connect} from 'react-redux';
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
