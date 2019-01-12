import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import React, {Component} from 'react';
import {equipmentStatsById} from '../../constants/equipmentStats';
import GearStatSelect from '../GearStatSelect';
import GearStatValueInput from '../GearStatValueInput';

const style = theme => ({
	root: {
		'& > *:not(:last-child)': {
			marginRight: theme.spacing.unit,
		},
	},
});

class GearStatInput extends Component {
	state = {
		stat: this.props.defaultStat || '',
		value: 0,
	};

	handleChange = event => {
		this.setState({[event.target.name]: event.target.value});
		if (this.props.onChange) {
			this.props.onChange({[this.props.name]: {[event.target.name]: event.target.value}});
		}
	};
	render() {
		const {className, classes, label, stats, defaultStat, onChange, ...props} = this.props;

		const disabled = Boolean(defaultStat);
		const percentage = this.state.stat && equipmentStatsById[this.state.stat].percentage;

		return (
			<div className={classNames(classes.root, className)} {...props}>
				<GearStatSelect
					name="stat"
					disabled={disabled}
					onChange={this.handleChange}
					label={label}
					stats={stats}
					SelectProps={{
						value: this.state.stat,
					}}
					value={this.state.stat}
				/>
				<GearStatValueInput name="value" onBlur={this.handleChange} percentage={percentage} />
			</div>
		);
	}
}

GearStatInput.propTypes = {
	className: PropTypes.any,
	classes: PropTypes.any,
	label: PropTypes.any,
	name: PropTypes.any,
};

export default withStyles(style)(GearStatInput);
