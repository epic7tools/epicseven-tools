import getGear from 'gear-preview/selectors/getGear';
import {connect} from 'react-redux';
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
