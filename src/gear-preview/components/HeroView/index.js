import {connect} from 'react-redux';
import getHeroById from '../../../core/selectors/getHeroById';
import getHeroAllStats from '../../selectors/getHeroAllStats';
import HeroView from './HeroView';

const mapState = (state, ownProps) => {
	const hero = getHeroById(state, ownProps.id);
	return {
		hero: {
			...hero,
			stats: getHeroAllStats(state),
		},
	};
};

export default connect(
	mapState,
	() => ({})
)(HeroView);
