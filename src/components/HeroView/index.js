import {connect} from 'react-redux';
import stats from '../../constants/stats';
import getHeroById from '../../selectors/getHeroById';
import getHeroGearStats from '../../selectors/getHeroGearStats';
import HeroView from './HeroView';

const mapState = (state, ownProps) => {
	const hero = getHeroById(state, ownProps.id);

	// note: temporary until implemented loading... screen
	if (hero === null) {
		return {};
	}

	const gearStats = getHeroGearStats(state, hero);

	return {
		hero: {
			...hero,
			stats: stats.map(stat => ({
				...stat,
				base: hero.stats.max[stat.id],
				gear: gearStats[stat.id],
			})),
		},
	};
};

export default connect(
	mapState,
	() => ({})
)(HeroView);
