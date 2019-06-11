import makeSnapshot from 'gear-preview/actions/basic/makeSnapshot';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
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
