import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import isLoading from '../../selectors/isLoading';
import Main from './Main';

const mapState = state => ({
	isLoading: isLoading(state),
});

export default withRouter(
	connect(
		mapState,
		() => ({})
	)(Main)
);
