import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';

const variants = {
	capricorn: {
		label: 'Capricorn',
	},
	virgo: {
		label: 'Virgo',
	},
	libra: {
		label: 'Libra',
	},
	gemini: {
		label: 'Gemini',
	},
	pisces: {
		label: 'Pisces',
	},
	leo: {
		label: 'Leo',
	},
	cancer: {
		label: 'Cancer',
	},
	sagittarius: {
		label: 'Sagittarius',
	},
	aquarius: {
		label: 'Aquarius',
	},
	aries: {
		label: 'Aries',
	},
	taurus: {
		label: 'Taurus',
	},
	scorpio: {
		label: 'Scorpio',
	},
};

const styles = {
	root: {
		display: 'flex',
	},
	typography: {},
	capricorn: {},
	virgo: {},
	libra: {},
	gemini: {},
	pisces: {},
	leo: {},
	cancer: {},
	sagittarius: {},
	aquarius: {},
	aries: {},
	taurus: {},
	scorpio: {},
};

const Zodiac = ({className, classes, variant, children, ...props}) => (
	<div className={classNames(classes.root, classes[variant], className)} {...props}>
		<Typography variant="h6" className={classes.typography} {...props}>
			{variants[variant].label}
		</Typography>
	</div>
);

Zodiac.propTypes = {
	children: PropTypes.node,
	classes: PropTypes.object,
	variant: PropTypes.oneOf([
		'capricorn',
		'virgo',
		'libra',
		'gemini',
		'pisces',
		'leo',
		'cancer',
		'sagittarius',
		'aquarius',
		'aries',
		'taurus',
		'scorpio',
	]),
};

export default withStyles(styles)(Zodiac);
