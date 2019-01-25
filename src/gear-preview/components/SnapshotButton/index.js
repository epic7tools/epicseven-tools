import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import makeSnapshot from '../../actions/makeSnapshot';
import SnapshotButton from './SnapshotButton';

const mapDispatch = (dispatch, ownProps) =>
	bindActionCreators(
		{
			onClick: () => makeSnapshot(ownProps.stats),
		},
		dispatch
	);

export default connect(
	null,
	mapDispatch
)(SnapshotButton);
