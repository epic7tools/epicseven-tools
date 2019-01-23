import {connect} from 'react-redux';
import {baseStats} from '../../../core/constants/stats';
import getHeroById from '../../../core/selectors/getHeroById';
import getHeroGearStats from '../../selectors/getHeroGearStats';
import getSelectedHeroAwakenedStats from '../../selectors/getSelectedHeroAwakenedStats';
import HeroView from './HeroView';

const mapState = (state, ownProps) => {
	const hero = getHeroById(state, ownProps.id);
	const gearStats = getHeroGearStats(state, hero);
	const awakenedStats = getSelectedHeroAwakenedStats(state);

	return {
		hero: {
			...hero,
			stats: baseStats.map(stat => ({
				...stat,
				base: awakenedStats[stat.id],
				gear: gearStats[stat.id],
			})),
		},
	};
};

export default connect(
	mapState,
	() => ({})
)(HeroView);
