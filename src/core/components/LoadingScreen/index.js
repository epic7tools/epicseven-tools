import didLoadError from 'core/selectors/didLoadError';
import {connect} from 'react-redux';
import LoadingScreen from './LoadingScreen';

const mapState = state => ({
	error: didLoadError(state),
});

export default connect(
	mapState,
	() => ({})
)(LoadingScreen);
