import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import selectHero from '../../actions/selectHero';
import getHeroTotalStats from '../../selectors/getHeroTotalStats';
import getSelectedHeroId from '../../selectors/getSelectedHeroId';
import Toolbar from './Toolbar';

const mapState = state => {
	const hero = getSelectedHeroId(state);
	const totalStats = hero ? getHeroTotalStats(state) : {};
	return {hero, totalStats};
};

const mapDispatch = dispatch => bindActionCreators({onHeroChange: selectHero}, dispatch);

export default connect(
	mapState,
	mapDispatch
)(Toolbar);
