import {connect} from 'react-redux';
import AutoComplete from '../../../core/components/AutoComplete';
import getHeroes from '../../../core/selectors/getHeroes';

const mapState = state => ({
	items: getHeroes(state).map(hero => ({
		label: hero.name,
		value: hero._id,
	})),
});

export default connect(mapState)(AutoComplete);
