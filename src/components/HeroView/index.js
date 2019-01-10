import {connect} from 'react-redux';
import getHeroEntities from '../../selectors/getHeroEntities';
import HeroView from './HeroView';
import isEmpty from 'lodash.isempty';
import stats from '../../constants/stats';

const mapState = (state, ownProps) => {
	const heroes = getHeroEntities(state);

	if (isEmpty(heroes)) {
		return {};
	}

	console.log(heroes);
	const hero = heroes[ownProps.id];
	console.log(hero);

	return {
		hero: {
			...hero,
			stats: stats.map(stat => ({
				...stat,
				base: hero.stats.max[stat.id],
				gear: 0,
			})),
		},
	};
};

export default connect(mapState)(HeroView);
