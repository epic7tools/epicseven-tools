import {bindActionCreators} from 'redux';
import makeSnapshot from '../../actions/makeSnapshot';
import SnapshotButton from './SnapshotButton';

const mapDispatch = (dispatch, ownProps) =>
	bindActionCreators({
		onClick: () => makeSnapshot(),
	});

export default SnapshotButton;
