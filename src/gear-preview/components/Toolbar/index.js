import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import selectHero from '../../actions/selectHero';
import getHeroTotalStats from '../../selectors/getHeroTotalStats';
import getSelectedHero from '../../selectors/getSelectedHero';
import Toolbar from './Toolbar';

const mapState = state => {
	const hero = getSelectedHero(state);
	if (!hero) {
		return {hero: null, totalStats: {}};
	}

	return {
		hero: {
			value: hero.id,
			label: hero.name,
		},
		totalStats: getHeroTotalStats(state),
	};
};

const mapDispatch = dispatch => bindActionCreators({onHeroChange: selectHero}, dispatch);

export default connect(
	mapState,
	mapDispatch
)(Toolbar);
