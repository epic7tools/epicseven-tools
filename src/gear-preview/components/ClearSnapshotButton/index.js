import {bindActionCreators} from 'redux';
import makeSnapshot from '../../actions/makeSnapshot';
import ClearSnapshotButton from './ClearSnapshotButton';

const mapDispatch = (dispatch, ownProps) =>
	bindActionCreators({
		onClick: () => makeSnapshot(),
	});

export default ClearSnapshotButton;
