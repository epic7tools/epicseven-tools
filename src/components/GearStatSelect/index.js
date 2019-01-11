import {connect} from 'react-redux';
import GearStatSelect from './GearStatSelect';

const mapState = (state, {stats}) => {
	console.log(stats);
	return {
		items: stats.map(stat => ({
			value: stat.id,
			label: stat.label,
		})),
	};
};

export default connect(
	mapState,
	() => ({})
)(GearStatSelect);
