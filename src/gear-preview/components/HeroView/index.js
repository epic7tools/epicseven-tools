import {connect} from 'react-redux';
import {baseStats} from '../../../core/constants/stats';
import getHeroById from '../../../core/selectors/getHeroById';
import getHeroGearStats from '../../selectors/getHeroGearStats';
import HeroView from './HeroView';

const mapState = (state, ownProps) => {
	const hero = getHeroById(state, ownProps.id);
	const gearStats = getHeroGearStats(state, hero);

	return {
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

export default connect(
	mapState,
	() => ({})
)(HeroView);
