import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';

const variants = {
	ice: {
		label: 'Ice',
	},
	earth: {
		label: 'Earth',
	},
	fire: {
		label: 'Fire',
	},
	light: {
		label: 'Light',
	},
	dark: {
		label: 'Dark',
	},
};

const styles = {
	root: {
		display: 'flex',
	},
	typography: {},
	ice: {},
	earth: {},
	fire: {},
	light: {},
	dark: {},
};

const Element = ({className, classes, variant, children, ...props}) => (
	<div className={classNames(classes.root, classes[variant], className)} {...props}>
		<Typography variant="h6" className={classes.typography} {...props}>
			{variants[variant].label}
		</Typography>
	</div>
);

Element.propTypes = {
	children: PropTypes.node,
	classes: PropTypes.object,
	variant: PropTypes.oneOf(['ice', 'earth', 'fire', 'light', 'dark']),
};

export default withStyles(styles)(Element);
