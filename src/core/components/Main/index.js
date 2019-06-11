import isLoading from 'core/selectors/isLoading';
import {connect} from 'react-redux';
import Main from './Main';

const mapState = state => ({
	isLoading: isLoading(state),
});

export default connect(
	mapState,
	() => ({})
)(Main);
