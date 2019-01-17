import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {baseStats} from '../../../core/constants/stats';
import getHeroById from '../../../core/selectors/getHeroById';
import hoverAwakening from '../../actions/hoverAwakening';
import setAwakening from '../../actions/setAwakening';
import getHeroGearStats from '../../selectors/getHeroGearStats';
import getStarsShown from '../../selectors/getStarsShown';
import HeroView from './HeroView';

const mapState = (state, ownProps) => {
	const hero = getHeroById(state, ownProps.id);
	const gearStats = getHeroGearStats(state, hero);

	return {
		stars: getStarsShown(state),
		hero: {
			...hero,
			stats: baseStats.map(stat => ({
				...stat,
				base: hero.stats.max[stat.id] || 0,
				gear: gearStats[stat.id],
			})),
		},
	};
};

const mapDispatch = dispatch =>
	bindActionCreators(
		{
			onAwakeningChange: setAwakening,
			onAwakeningHover: hoverAwakening,
		},
		dispatch
	);

export default connect(
	mapState,
	mapDispatch
)(HeroView);
