import {connect} from 'react-redux';
import changeGearSet from '../../actions/basic/changeGearSet';
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
			changeGearSet({
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
