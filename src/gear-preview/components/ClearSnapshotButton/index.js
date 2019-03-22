import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import makeSnapshot from '../../actions/basic/makeSnapshot';
import ClearSnapshotButton from './ClearSnapshotButton';

const mapDispatch = dispatch => bindActionCreators({onClick: () => makeSnapshot({})}, dispatch);

export default connect(
	null,
	mapDispatch
)(ClearSnapshotButton);
