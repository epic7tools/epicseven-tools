import AutoComplete from 'core/components/AutoComplete';
import getHeroes from 'core/selectors/getHeroes';
import {connect} from 'react-redux';

const mapState = state => ({
	items: getHeroes(state).map(hero => ({
		label: hero.name,
		value: hero.id,
	})),
});

export default connect(mapState)(AutoComplete);
