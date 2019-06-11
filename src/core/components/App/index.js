import initialise from 'core/actions/initialise';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import App from './App';

const mapDispatch = dispatch =>
	bindActionCreators(
		{
			onMount: initialise,
		},
		dispatch
	);

export default connect(
	null,
	mapDispatch
)(App);
