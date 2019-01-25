import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import selectHero from '../../actions/selectHero';
import getHeroTotalStats from '../../selectors/getHeroTotalStats';
import getSelectedHeroId from '../../selectors/getSelectedHeroId';
import Toolbar from './Toolbar';

const mapState = state => ({
	hero: getSelectedHeroId(state),
	totalStats: getHeroTotalStats(state),
});

const mapDispatch = dispatch => bindActionCreators({onHeroChange: selectHero}, dispatch);

export default connect(
	mapState,
	mapDispatch
)(Toolbar);
