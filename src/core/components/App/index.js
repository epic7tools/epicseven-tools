import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import initialise from '../../actions/initialise';
import App from './App';

const mapDispatch = dispatch =>
	bindActionCreators(
		{
			onMount: initialise,
		},
		dispatch
	);

export default withRouter(
	connect(
		null,
		mapDispatch
	)(App)
);
