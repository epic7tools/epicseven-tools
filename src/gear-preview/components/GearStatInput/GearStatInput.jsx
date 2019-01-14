import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import React, {Component} from 'react';
import {statsById} from '../../../core/constants/stats';
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
	handleChange = event => {
		if (this.props.onChange) {
			this.props.onChange({
				event: event.type,
				line: this.props.name,
				name: event.target.name,
				value: event.target.value,
			});
		}
	};

	render() {
		const {className, classes, label, stats, defaultStat, onChange, values, ...props} = this.props;

		const disabled = Boolean(defaultStat);
		const percentage = values.stat && statsById[values.stat].percentage;

		return (
			<div className={classNames(classes.root, className)} {...props}>
				<GearStatSelect
					name="stat"
					disabled={disabled}
					onChange={this.handleChange}
					label={label}
					stats={stats}
					value={values.stat}
				/>
				<GearStatValueInput
					name="value"
					onBlur={this.handleChange}
					onChange={this.handleChange}
					percentage={percentage}
					value={values.currentValue}
				/>
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
