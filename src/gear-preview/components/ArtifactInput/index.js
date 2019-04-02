import {connect} from 'react-redux';
import getGear from '../../selectors/getGear';
import ArtifactInput from './ArtifactInput';

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
});

export default connect(
	mapState,
	mapDispatch
)(ArtifactInput);
