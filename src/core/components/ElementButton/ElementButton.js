import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import React from 'react';
import ElementIcon from '../ElementIcon';

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

const styles = theme => ({
	root: {
		display: 'flex',
	},
	icon: {
		marginRight: theme.spacing.unit / 2,
		height: 20,
		width: 20,
	},
	typography: {},
	ice: {},
	earth: {},
	fire: {},
	light: {},
	dark: {},
});

const ElementButton = ({className, classes, variant, ...props}) => (
	<Button className={classNames(classes.root, className)} {...props}>
		<ElementIcon variant={variant} className={classes.icon} />
		{variants[variant].label}
	</Button>
);

ElementButton.propTypes = {
	children: PropTypes.node,
	classes: PropTypes.object,
	variant: PropTypes.oneOf(['ice', 'earth', 'fire', 'light', 'dark']),
};

export default withStyles(styles)(ElementButton);
