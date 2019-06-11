import makeSnapshot from 'gear-preview/actions/basic/makeSnapshot';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ClearSnapshotButton from './ClearSnapshotButton';

const mapDispatch = dispatch => bindActionCreators({onClick: () => makeSnapshot({})}, dispatch);

export default connect(
	null,
	mapDispatch
)(ClearSnapshotButton);
