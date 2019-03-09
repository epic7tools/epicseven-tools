import {connect} from 'react-redux';
import getHeroes from '../../../core/selectors/getHeroes';
import NewHeroSelect from './NewHeroSelect';

const mapState = state => ({
	items: getHeroes(state).map(hero => ({
		label: hero.name,
		value: hero._id,
	})),
});

export default connect(mapState)(NewHeroSelect);
