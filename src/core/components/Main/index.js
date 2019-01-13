import {connect} from 'react-redux';
import isLoading from '../../selectors/isLoading';
import Main from './Main';

const mapState = state => {
	console.log('test', isLoading(state));
	return {
		isLoading: isLoading(state),
	};
};

export default connect(
	mapState,
	() => ({})
)(Main);
