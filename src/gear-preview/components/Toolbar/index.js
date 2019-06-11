import onChangeHero from 'gear-preview/actions/onChangeHero';
import getHero from 'gear-preview/selectors/getHero';
import isHeroLoading from 'gear-preview/selectors/isHeroLoading';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Toolbar from './Toolbar';

const mapState = state => {
	const hero = getHero(state);
	if (!hero) {
		return {hero: null};
	}

	return {
		hero: {
			value: hero.id,
			label: hero.name,
		},
		isHeroLoading: isHeroLoading(state),
	};
};

const mapDispatch = dispatch => bindActionCreators({onHeroChange: onChangeHero}, dispatch);

export default connect(
	mapState,
	mapDispatch
)(Toolbar);
