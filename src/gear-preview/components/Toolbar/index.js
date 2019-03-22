import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import changeHero from '../../actions/changeHero';
import getHeroTotalStats from '../../selectors/getHeroTotalStats';
import getSelectedHero from '../../selectors/getSelectedHero';
import isHeroLoading from '../../selectors/isHeroLoading';
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
		isHeroLoading: isHeroLoading(state),
		totalStats: getHeroTotalStats(state),
	};
};

const mapDispatch = dispatch => bindActionCreators({onHeroChange: changeHero}, dispatch);

export default connect(
	mapState,
	mapDispatch
)(Toolbar);
