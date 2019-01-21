import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import selectHero from '../../actions/selectHero';
import Toolbar from './Toolbar';

const mapDispatch = dispatch => bindActionCreators({onHeroChange: selectHero}, dispatch);

export default connect(
	null,
	mapDispatch
)(Toolbar);
