import {connect} from 'react-redux';
import getHeroList from '../../../core/selectors/getHeroList';
import HeroSelect from './HeroSelect';

const mapState = state => ({
	items: getHeroList(state),
});

export default connect(mapState)(HeroSelect);
