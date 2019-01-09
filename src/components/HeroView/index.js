import {connect} from 'react-redux';
import getHeroEntities from '../../selectors/getHeroEntities';
import getStats from '../../selectors/getStats';
import HeroView from './HeroView';
import isEmpty from 'lodash.isempty';

const mapState = (state, ownProps) => {
	const stats = getStats(state);
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
				id: stat.fileId,
				label: stat.name,
				base: hero.stats.max[stat.fileId],
				gear: 0,
				percentage: false,
			})),
		},
	};
};

export default connect(mapState)(HeroView);
