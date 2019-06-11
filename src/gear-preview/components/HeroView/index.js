import getHeroById from 'core/selectors/getHeroById';
import getAllStats from 'gear-preview/selectors/getAllStats';
import {connect} from 'react-redux';
import HeroView from './HeroView';

const mapState = (state, ownProps) => {
	const hero = getHeroById(state, ownProps.id);
	return {
		hero: {
			...hero,
			stats: getAllStats(state),
		},
	};
};

export default connect(
	mapState,
	() => ({})
)(HeroView);
