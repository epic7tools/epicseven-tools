import {connect} from 'react-redux';
import didLoadError from '../../selectors/didLoadError';
import LoadingScreen from './LoadingScreen';

const mapState = state => ({
	error: didLoadError(state),
});

export default connect(
	mapState,
	() => ({})
)(LoadingScreen);
