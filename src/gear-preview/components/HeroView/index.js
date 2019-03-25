import {connect} from 'react-redux';
import getHeroById from '../../../core/selectors/getHeroById';
import getAllStats from '../../selectors/getAllStats';
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
