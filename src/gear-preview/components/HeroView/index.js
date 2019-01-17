import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {baseStats} from '../../../core/constants/stats';
import getHeroById from '../../../core/selectors/getHeroById';
import setAwakening from '../../actions/setAwakening';
import getAwakenedStars from '../../selectors/getAwakenedStars';
import getHeroGearStats from '../../selectors/getHeroGearStats';
import HeroView from './HeroView';

const mapState = (state, ownProps) => {
	const hero = getHeroById(state, ownProps.id);
	const gearStats = getHeroGearStats(state, hero);

	return {
		stars: getAwakenedStars(state),
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
		},
		dispatch
	);

export default connect(
	mapState,
	mapDispatch
)(HeroView);
